'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Verify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') ?? '';
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({
        email: String(form.get('email') ?? '').trim().toLowerCase(),
        otp: String(form.get('otp') ?? '').trim()
      })
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setMessage(data.message ?? 'OTP verification failed.');
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <form className="card grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-black text-navy">Verify email OTP</h1>
        <p className="text-sm text-slate-600">
          Enter the OTP sent to your official @satgurutravel.com email ID.
        </p>
        <input className="input" name="email" type="email" defaultValue={emailFromQuery} placeholder="Official email" required />
        <input className="input" name="otp" inputMode="numeric" maxLength={6} placeholder="6-digit OTP" required />
        {message ? <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700">{message}</p> : null}
        <button className="btn-primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Verifying...' : 'Verify and enter portal'}
        </button>
        <p className="text-xs text-slate-500">
          Current MVP testing OTP: 123456. Replace this with the real email provider/Supabase OTP before production go-live.
        </p>
      </form>
    </section>
  );
}
