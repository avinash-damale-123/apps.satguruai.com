import Link from 'next/link';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/tools', label: 'Tools' },
  { href: '/contact', label: 'Contact' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/admin', label: 'Admin' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-navy">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-saffron">SA</span>
          <span>Satguru AI</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link href="/login" className="btn-secondary py-2">
            Login
          </Link>
          <Link href="/signup" className="btn-primary py-2">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
