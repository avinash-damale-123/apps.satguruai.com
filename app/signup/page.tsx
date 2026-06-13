'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const allowedDomain = 'satgurutravel.com';

export default function Signup() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '').trim().toLowerCase();

    if (!email.endsWith(`@${allowedDomain}`)) {
      setMessage('Self signup is allowed only with an official company email ID.');
      return;
    }

    router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <form className="card grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-black text-navy">Self signup</h1>
        <p className="text-sm text-slate-600">
          Signup is restricted to official company email IDs. After submitting, verify your email using the OTP step.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="input" name="fullName" placeholder="Full name" required />
          <input className="input" name="email" type="email" placeholder="Official company email" required />
          <input className="input" name="mobile" placeholder="Mobile" />
          <input className="input" name="department" placeholder="Department" />
          <input className="input" name="branch" placeholder="Branch" />
          <input className="input" name="country" placeholder="Country" />
        </div>
        {message ? <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700">{message}</p> : null}
        <button className="btn-primary" type="submit">
          Continue to OTP verification
        </button>
        <p className="text-xs text-slate-500">
          Email OTP provider integration is pending and must be completed before production go-live.
        </p>
      </form>
    </section>
  );
}
