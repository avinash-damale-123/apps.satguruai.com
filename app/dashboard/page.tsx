import { DashboardShell } from '@/components/AppShell';
import { PortalCard } from '@/components/PortalCard';
import { announcements, portals } from '@/lib/data';

export default function Dashboard() {
  return (
    <DashboardShell>
      <div className="grid gap-8">
        <section className="rounded-3xl bg-gradient-to-br from-navy to-slate-800 p-8 text-white shadow-sm">
          <p className="font-semibold text-saffron">app.satguruai.com</p>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">
            One governed gateway for every Satguru AI application.
          </h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Discover tools, understand ownership, request support, and prepare for future SSO through a
            database-backed portal registry.
          </p>
          <div className="mt-6 grid gap-3 text-sm md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4">Approved-domain users only</div>
            <div className="rounded-2xl bg-white/10 p-4">Admin-managed portal registry</div>
            <div className="rounded-2xl bg-white/10 p-4">Documentation and support metadata</div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-navy">Search internal portals</h2>
          <input className="input mt-4" placeholder="Search portals, departments, or keywords" />
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {announcements.map((announcement) => (
            <div className="card" key={announcement.title}>
              <b>{announcement.title}</b>
              <p className="mt-2 text-sm text-slate-600">{announcement.message}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy">All Satguru AI portals</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {portals.map((portal) => (
              <PortalCard key={portal.id} portal={portal} />
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
