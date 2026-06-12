# Backlog, Test Cases, Roadmap and Deployment

## GitHub issue backlog

| Issue ID | Epic | Description |
|---|---|---|
| EPIC-01 | Project Setup | Create Next.js TypeScript project, Tailwind CSS, linting, base layout, route structure. |
| EPIC-02 | Branding | Create Satguru AI theme, logo placeholder, header, footer, design system. |
| EPIC-03 | Authentication | Signup, login, email verification, account recovery, session protection. |
| EPIC-04 | Allowed Domain Master | Admin CRUD for allowed email domains and domain validation service. |
| EPIC-05 | User Profile | Profile view/edit, profile image upload and profile completion indicator. |
| EPIC-06 | Portal Marketplace | Portal card grid, search, filters, categories and portal detail page. |
| EPIC-07 | Admin Portal Management | Add/edit portal records, upload logo, assign category and owner. |
| EPIC-08 | Document Management | Add documents, set visibility, map to portal and list documents. |
| EPIC-09 | Favorites | Allow users to favorite and unfavorite portals. |
| EPIC-10 | Support Module | Build contact form and support request database. |
| EPIC-11 | Announcements | Admin create announcements and display them on dashboard. |
| EPIC-12 | Analytics Foundation | Track login, portal views and open clicks. |
| EPIC-13 | AI Assistant | Implement portal-specific document-based Q&A with provider abstraction. |
| EPIC-14 | Security Hardening | Add route protection, role checks, rate limiting and audit logs. |
| EPIC-15 | Deployment | Connect GitHub repo to Vercel, configure environment variables and custom domain. |

## Roadmap

| Phase | Name | Key Deliverables | Outcome |
|---|---|---|---|
| Phase 0 | Planning and Setup | Finalize requirements, repo setup, data model, domain plan. | Project ready for development. |
| Phase 1 | MVP Foundation | Public site, signup, login, dashboard, portal listing, admin portal CRUD, allowed domains. | Usable central portal. |
| Phase 2 | Knowledge Layer | Documentation upload, FAQ, document search, portal detail pages improved. | Users can learn from portal content. |
| Phase 3 | AI Assistant | Document extraction, AI Q&A, portal-specific assistant, source links. | Self-service knowledge support. |
| Phase 4 | Governance and Analytics | Access requests, user analytics, portal analytics, audit logs, announcements. | Better control and visibility. |
| Phase 5 | SSO Integration | Central auth flow, OAuth/OIDC and connected portal login. | One login across integrated portals. |
| Phase 6 | Enterprise Expansion | HRMS integration, mobile app, Teams integration, advanced AI, multi-language. | Full digital workplace expansion. |

## MVP acceptance checklist

| Area | Acceptance Criteria |
|---|---|
| Domain | `app.satguruai.com` opens securely with HTTPS and `satguruai.com` redirects to it. |
| Signup | Approved domain user can register and non-approved domain user is blocked. |
| Email verification | Verification is sent, expires correctly, and activates account. |
| Login | Registered active user can login; inactive user cannot login. |
| Dashboard | User can view portal cards, search and favorite portals. |
| Portal Link | Open button redirects to correct subdomain. |
| Admin Portal | Admin can add and edit portal records. |
| Documents | Admin can upload and map document metadata to a portal. |
| User Management | Admin can view, filter and update user status. |
| Security | Unauthorized users cannot access dashboard/admin/restricted document URLs. |
| Responsive UI | Portal works on desktop and mobile browser. |

## Test cases

| Test ID | Area | Scenario | Expected Outcome |
|---|---|---|---|
| TC-001 | Public | Open homepage without login | Homepage loads and restricted content is hidden. |
| TC-002 | Public | Open tools preview | Only limited public portal overview is shown. |
| TC-003 | Public | Submit contact form | Contact request is submitted. |
| TC-004 | Signup | Register with approved domain | User can proceed to verification. |
| TC-005 | Signup | Register with unapproved domain | Signup is stopped with clear message. |
| TC-006 | Signup | Register duplicate email | Duplicate registration is prevented. |
| TC-007 | Verification | Enter valid code | Account is verified. |
| TC-008 | Verification | Enter expired code | Verification fails with clear message. |
| TC-009 | Login | Login valid user | User reaches dashboard. |
| TC-010 | Login | Login inactive user | Access is denied. |
| TC-011 | Dashboard | Search portal | Matching portals are displayed. |
| TC-012 | Dashboard | Add favorite | Portal appears in favorites. |
| TC-013 | Portal Directory | Open portal detail | Detail page shows correct portal information. |
| TC-014 | Portal Directory | Click Open Portal | User is redirected to the portal URL. |
| TC-015 | Admin | Add portal | Portal is saved and visible as per status/visibility. |
| TC-016 | Admin | Edit portal | Changes are saved and displayed. |
| TC-017 | Documents | Add document metadata | Document is linked to portal. |
| TC-018 | Security | Access dashboard without login | User is redirected to login. |
| TC-019 | Security | Access admin as regular user | Access is denied. |

## Deployment checklist

- GitHub repository exists.
- PRD files exist under `docs/prd/`.
- Next.js project is created.
- Environment variables are documented.
- Database schema is prepared.
- Authentication flow is implemented.
- Initial portal registry seed data is available.
- Admin user setup process is documented.
- Public pages reviewed.
- Signup and login tested.
- Portal listing and search tested.
- Admin portal management tested.
- Route protection tested.
- Vercel project connected to GitHub.
- `app.satguruai.com` added in Vercel.
- DNS records shared with IT and configured.
- Root redirect configured.
- SSL verified.
- Mobile and desktop UI checked.

## Final Codex instruction

Start by implementing the MVP foundation. Do not attempt every future feature in the first pass. Build the system as a clean, database-backed application hub with admin-managed portal registry and approved-domain user registration.
