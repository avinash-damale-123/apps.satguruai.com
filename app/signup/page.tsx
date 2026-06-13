'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const allowedDomain = 'satgurutravel.com';

export default function Signup() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '').trim().toLowerCase();

    if (!email.endsWith(`@${allowedDomain}`)) {
      setMessage('Self signup is allowed only with an official @satgurutravel.com email ID.');
      setIsSubmitting(false);
      return;
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        fullName: String(form.get('fullName') ?? '').trim(),
        email,
        mobile: String(form.get('mobile') ?? '').trim(),
        department: String(form.get('department') ?? '').trim(),
        branch: String(form.get('branch') ?? '').trim(),
        country: String(form.get('country') ?? '').trim()
      })
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setMessage(data.message ?? 'Signup failed. Please try again.');
      return;
    }

    router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <form className="card grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-black text-navy">Self signup</h1>
        <p className="text-sm text-slate-600">
          Signup is restricted to official <strong>@satgurutravel.com</strong> email IDs. After submitting,
          verify your email using the OTP step.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="input" name="fullName" placeholder="Full name" required />
          <input className="input" name="email" type="email" placeholder="Official @satgurutravel.com email" required />
          <input className="input" name="mobile" placeholder="Mobile" />
          <input className="input" name="department" placeholder="Department" />
          <input className="input" name="branch" placeholder="Branch" />
          <input className="input" name="country" placeholder="Country" />
        </div>
        {message ? <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700">{message}</p> : null}
        <button className="btn-primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Sending OTP...' : 'Create account and send OTP'}
        </button>
        <p className="text-xs text-slate-500">
          Current MVP note: OTP delivery is provider-ready. Until email provider credentials are configured, use demo OTP 123456 for testing.
        </p>
      </form>
    </section>
  );
}
