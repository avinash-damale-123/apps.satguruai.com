# Pages and UI Requirements

## Public pages

- `/` Home page: Satguru AI logo, hero section, benefits, featured tools preview, login/signup buttons, FAQ preview and footer.
- `/about` About page: explain the Satguru AI ecosystem, purpose, benefits, and long-term vision.
- `/tools` Tools preview page: show limited public overview of portals without internal details.
- `/contact` Contact page: collect name, email, category, portal optional, subject and message.

## Auth pages

- `/login`: email sign-in form with link to signup and account recovery.
- `/signup`: self-registration form with official email, name, mobile, department, branch, country and verification step.
- `/verify-otp`: email verification page for signup.
- `/forgot-password`: account recovery page.

## User pages

- `/dashboard`: main logged-in landing page with welcome message, search, favorites, recent portals, announcements and portal cards.
- `/portals`: searchable and filterable portal directory.
- `/portals/[slug]`: portal detail page with logo, description, category, owner, support contact, documentation, FAQs and open portal action.
- `/profile`: user profile page.
- `/favorites`: saved portal list.
- `/support`: logged-in support or access request form.

## Admin pages

- `/admin`: admin dashboard with user, portal, document and support counts.
- `/admin/users`: user management table with filters and status actions.
- `/admin/portals`: add, edit, deactivate and manage portal records.
- `/admin/domains`: manage approved registration domains.
- `/admin/categories`: manage portal categories.
- `/admin/documents`: manage document metadata and visibility.
- `/admin/announcements`: publish notices.
- `/admin/support`: review support requests.
- `/admin/settings`: future configuration area.

## UI requirements

- Professional corporate design.
- Responsive layout for desktop and mobile.
- Card-based portal marketplace.
- Consistent badges for Live, Beta, Maintenance, Coming Soon and Retired.
- Clear empty states and validation messages.
- Admin tables must support search and filters.
- Public pages must not expose restricted internal portal details.
