'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: String(form.get('email') ?? '').trim().toLowerCase(),
        password: String(form.get('password') ?? '')
      })
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setMessage(data.message ?? 'Login failed. Please try again.');
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <form className="card grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-black text-navy">Login</h1>
        <p className="text-sm text-slate-600">
          Use your official <strong>@satgurutravel.com</strong> email ID to enter the portal.
        </p>
        <input className="input" name="email" type="email" placeholder="Official @satgurutravel.com email" required />
        <input className="input" name="password" type="password" placeholder="Password / temporary access code" required />
        {message ? <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700">{message}</p> : null}
        <button className="btn-primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Checking...' : 'Login'}
        </button>
        <div className="flex justify-between text-sm">
          <Link href="/signup">Self signup</Link>
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </section>
  );
}
