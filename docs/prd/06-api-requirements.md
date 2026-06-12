# API Requirements

Use these as API or service requirements. If the implementation uses Supabase server actions instead of REST endpoints, create equivalent service functions.

## Authentication APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| POST | `/api/auth/signup` | Register user after domain validation | No |
| POST | `/api/auth/verify-otp` | Verify email code and activate user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/logout` | Logout user | Yes |
| POST | `/api/auth/forgot-password` | Start account recovery | No |
| POST | `/api/auth/reset-password` | Reset account password after verification | No |

## User APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| GET | `/api/users/me` | Get current profile | Yes |
| PATCH | `/api/users/me` | Update current profile | Yes |
| GET | `/api/admin/users` | Admin list users | Admin |
| PATCH | `/api/admin/users/[id]` | Admin update user profile/status/role | Admin |

## Domain APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| GET | `/api/admin/domains` | List allowed domains | Admin |
| POST | `/api/admin/domains` | Add allowed domain | Admin |
| PATCH | `/api/admin/domains/[id]` | Update allowed domain | Admin |
| DELETE | `/api/admin/domains/[id]` | Deactivate allowed domain | Admin |

## Portal APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| GET | `/api/portals` | List visible portals | Yes |
| GET | `/api/portals/[slug]` | Get portal detail | Yes |
| GET | `/api/admin/portals` | Admin list portals | Admin |
| POST | `/api/admin/portals` | Add portal | Admin |
| PATCH | `/api/admin/portals/[id]` | Update portal | Admin |
| DELETE | `/api/admin/portals/[id]` | Deactivate portal | Admin |

## Document APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| GET | `/api/portals/[slug]/documents` | List visible portal documents | Yes |
| GET | `/api/admin/documents` | Admin list documents | Admin |
| POST | `/api/admin/documents` | Add/upload document metadata | Admin |
| PATCH | `/api/admin/documents/[id]` | Update document | Admin |
| DELETE | `/api/admin/documents/[id]` | Deactivate document | Admin |

## Favorites APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| GET | `/api/favorites` | List current user's favorites | Yes |
| POST | `/api/favorites` | Add favorite portal | Yes |
| DELETE | `/api/favorites/[portalId]` | Remove favorite portal | Yes |

## Support APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| POST | `/api/support` | Create support/contact request | Optional depending page |
| GET | `/api/admin/support` | Admin list support requests | Admin |
| PATCH | `/api/admin/support/[id]` | Admin update support request | Admin |

## Analytics APIs

| Method | Endpoint | Purpose | Auth Required |
|---|---|---|---|
| POST | `/api/analytics/portal-open` | Track portal open click | Yes |
| POST | `/api/analytics/search` | Track search query | Yes |
| GET | `/api/admin/analytics` | Admin dashboard metrics | Admin |

## API rules

- Validate all inputs.
- Return consistent error format.
- Protect admin APIs with role checks.
- Do not trust client-side role data.
- Create audit log entries for important admin actions.
