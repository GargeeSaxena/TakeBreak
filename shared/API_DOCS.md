# TakeBreak API Documentation (Future)

This document outlines the API structure for future Render-hosted backend services.

## 🎯 Purpose

While Supabase handles most backend needs, Render will host:
- Custom business logic
- Complex calculations
- Third-party integrations
- Webhook handlers

## 📡 Planned Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

### User Settings

```
GET    /api/settings
PUT    /api/settings
PATCH  /api/settings/interval
```

### Break Management

```
GET    /api/breaks/history
POST   /api/breaks/log
GET    /api/breaks/stats
```

### Sync

```
GET    /api/sync/status
POST   /api/sync/pull
POST   /api/sync/push
```

## 🔒 Authentication

All API requests will require:
- Bearer token in Authorization header
- Valid Supabase JWT token

Example:
```
Authorization: Bearer eyJhbGc...
```

## 📝 Response Format

Success:
```json
{
  "success": true,
  "data": { ... }
}
```

Error:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error"
  }
}
```

## 🚀 Future Implementation

This will be implemented when advanced features are needed beyond Supabase capabilities.


