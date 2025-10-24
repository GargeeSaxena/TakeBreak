# Supabase Setup Guide (For Future Implementation)

This guide will be used when implementing cross-device sync in future versions.

## 📝 Overview

Supabase will provide:
- User authentication
- Cloud database for settings sync
- Break history tracking
- Real-time updates across devices

## 🚀 Setup Instructions

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in project details:
   - Name: TakeBreak
   - Database Password: (save this securely)
   - Region: Choose closest to your users
5. Wait for project to be created (~2 minutes)

### 2. Run Database Schema

1. In your Supabase dashboard, go to "SQL Editor"
2. Copy the contents of `supabase-schema.sql`
3. Paste into the SQL editor
4. Click "Run" to execute the schema
5. Verify tables are created in "Table Editor"

### 3. Get API Keys

1. Go to Project Settings → API
2. Copy the following:
   - Project URL (e.g., `https://xxxxx.supabase.co`)
   - `anon` public key
   - `service_role` secret key (keep this secure!)

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_role_key
```

**Important:** Add `.env` to `.gitignore` to keep keys secure!

### 5. Enable Authentication

1. Go to Authentication → Settings
2. Enable Email authentication (or preferred method)
3. Configure email templates if needed
4. Set site URL for redirects

## 🔐 Security Best Practices

- Never commit API keys to Git
- Use Row Level Security (RLS) policies (already set up in schema)
- Use the `anon` key for client-side code
- Use the `service_role` key only for backend operations
- Enable email verification for production

## 📊 Database Schema

### Tables:
- **users**: User account information
- **user_settings**: Break interval preferences
- **break_history**: Log of breaks taken

### Future Features:
- Break completion tracking
- Analytics and insights
- Custom break exercises
- Social features (optional)

## 🧪 Testing

1. Create a test user in Supabase dashboard
2. Test API calls using Supabase client libraries
3. Verify RLS policies are working
4. Test sync between Android and Chrome extension

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 🔄 Integration Timeline

**Phase 1 (Current):** Local storage only
**Phase 2:** User authentication
**Phase 3:** Settings sync
**Phase 4:** Break history and analytics


