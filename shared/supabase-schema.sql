-- TakeBreak Supabase Database Schema
-- Version: 0.1.0
-- This schema will be used in future versions for cross-device sync

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (will be linked to Supabase Auth)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User settings table
CREATE TABLE IF NOT EXISTS user_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    break_interval INTEGER DEFAULT 20, -- in minutes
    break_duration INTEGER DEFAULT 5, -- in minutes (for future use)
    notification_enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Break history table
CREATE TABLE IF NOT EXISTS break_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    break_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed BOOLEAN DEFAULT FALSE,
    device_type VARCHAR(50), -- 'android' or 'chrome_extension'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_settings_user_id ON user_settings(user_id);
CREATE INDEX IF NOT EXISTS idx_break_history_user_id ON break_history(user_id);
CREATE INDEX IF NOT EXISTS idx_break_history_break_time ON break_history(break_time);

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE break_history ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY users_select_policy ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY users_insert_policy ON users
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY users_update_policy ON users
    FOR UPDATE USING (auth.uid() = id);

-- User settings policies
CREATE POLICY user_settings_select_policy ON user_settings
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY user_settings_insert_policy ON user_settings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY user_settings_update_policy ON user_settings
    FOR UPDATE USING (auth.uid() = user_id);

-- Break history policies
CREATE POLICY break_history_select_policy ON break_history
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY break_history_insert_policy ON break_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to auto-update updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at
    BEFORE UPDATE ON user_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comments
COMMENT ON TABLE users IS 'User accounts linked to Supabase Auth';
COMMENT ON TABLE user_settings IS 'User preferences and settings for break intervals';
COMMENT ON TABLE break_history IS 'History of break reminders and completion status';


