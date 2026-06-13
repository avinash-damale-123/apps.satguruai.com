'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Verify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') ?? '';
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '').trim().toLowerCase();
    const otp = String(form.get('otp') ?? '').trim();

    if (!email.endsWith('@satgurutravel.com')) {
      setMessage('Verification is allowed only for official company email IDs.');
      return;
    }

    if (otp !== '123456') {
      setMessage('Invalid OTP for MVP testing.');
      return;
    }

    router.push('/dashboard?entry=portal');
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <form className="card grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-black text-navy">Verify email OTP</h1>
        <p className="text-sm text-slate-600">
          Enter the OTP sent to your official company email ID.
        </p>
        <input className="input" name="email" type="email" defaultValue={emailFromQuery} placeholder="Official email" required />
        <input className="input" name="otp" inputMode="numeric" maxLength={6} placeholder="6-digit OTP" required />
        {message ? <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700">{message}</p> : null}
        <button className="btn-primary" type="submit">
          Verify and enter portal
        </button>
        <p className="text-xs text-slate-500">
          Email provider integration is pending and must be completed before production go-live.
        </p>
      </form>
    </section>
  );
}
