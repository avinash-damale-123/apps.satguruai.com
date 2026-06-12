# Security, Non-Functional Requirements, and Environment Configuration

## Security requirements

| Req ID | Requirement | Acceptance Detail | Priority | Phase |
|---|---|---|---|---|
| SEC-001 | HTTPS only | All production traffic must use HTTPS with valid SSL. | High | MVP |
| SEC-002 | Secure account storage | Account authentication must use secure provider-supported handling. | High | MVP |
| SEC-003 | Protected routes | Dashboard, documents, and admin pages require login. | High | MVP |
| SEC-004 | Role-based admin access | Admin pages restricted to admin or super admin. | High | MVP |
| SEC-005 | Document visibility | Restricted internal documents are not publicly accessible. | High | MVP |
| SEC-006 | Audit logs | Important user/admin actions should be logged. | Medium | Phase 2 |
| SEC-007 | Input validation | Forms must validate and sanitize user input. | High | MVP |
| SEC-008 | Rate limiting | Login, OTP and support forms should include abuse protection. | Medium | Phase 1 |

## Access rules

- Public users can access only public pages.
- Registered users can access dashboard, profile, portal directory and visible documents.
- Admin users can access admin modules.
- Super admin can manage roles and system configuration.
- Server-side checks must protect admin and authenticated routes.

## Non-functional requirements

| Area | Requirement | Target / Rule |
|---|---|---|
| Performance | Initial page load | Public homepage should load quickly on office internet. |
| Performance | Dashboard load | Dashboard should load portal cards for at least 25 to 100 portal records without noticeable delay. |
| Scalability | Portal count | System should support at least 100 portal records without redesign. |
| Scalability | User count | Initial design should support at least 1000 users and be extendable. |
| Availability | Hosting | Use Vercel production deployment with stable domain and SSL. |
| Maintainability | Admin control | New portal and documentation should be added without code changes. |
| Usability | Navigation | Users should reach any portal within 2 to 3 clicks after login. |
| Accessibility | Readable UI | Use sufficient contrast, clear labels and keyboard-accessible forms. |
| Responsiveness | Device support | Desktop, laptop, tablet and mobile browser layouts required. |
| Observability | Errors | Application errors should be logged in a developer-friendly manner. |
| Compliance | Data minimization | Collect only data needed for identity, support and analytics. |

## Environment variables

Create `.env.example` with these placeholders:

```bash
NEXT_PUBLIC_APP_URL=https://app.satguruai.com
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AUTH_SECRET=
EMAIL_PROVIDER_API_KEY=
EMAIL_FROM_ADDRESS=
AI_PROVIDER=
AI_API_KEY=
STORAGE_BUCKET=
MAX_UPLOAD_SIZE_MB=20
OTP_EXPIRY_MINUTES=10
LOGIN_LOCK_ATTEMPTS=5
```

## Data governance

| Data Category | Owner | Maintenance Rule |
|---|---|---|
| Portal Records | Platform admin and portal owner | Review URL, description, owner and status monthly or after release. |
| User Records | Admin / IT / authorized business admin | Deactivate or update as per organizational process. |
| Allowed Domains | Super Admin / IT | Add domains only after approval. |
| Documents | Portal owner | Update manuals and SOPs when related portal changes. |
| FAQs | Portal owner / support team | Update based on repeated user questions. |
| Announcements | Admin | Publish time-bound notices and remove outdated notices. |
| Audit Logs | System | Retain logs based on policy. |
| Analytics | System / management | Use for adoption and improvement. |
