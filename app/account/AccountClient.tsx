'use client';

import { SignIn, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { ArrowRight, ShieldCheck, ShoppingBag, User } from 'lucide-react';

const ADMIN_EMAIL = 'aaravg78201333@gmail.com';

function AccountDetails() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || '';
  const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  return (
    <div className="account-card">
      <div className="account-avatar">{user?.imageUrl ? <img src={user.imageUrl} alt="" /> : <User />}</div>
      <span className="eyebrow">{isAdmin ? 'ADMIN ACCOUNT' : 'ODARIS MC ACCOUNT'}</span>
      <h1>WELCOME BACK, <em>{user?.firstName || 'PLAYER'}</em></h1>
      <p>Signed in as <b>{email}</b></p>
      <div className="account-actions">
        <a className="primary" href="/history"><ShoppingBag /> PURCHASE HISTORY <ArrowRight /></a>
        {isAdmin && <a className="secondary" href="/admin"><ShieldCheck /> ADMIN PANEL</a>}
        <div className="account-profile"><UserButton afterSignOutUrl="/account" showName /></div>
      </div>
    </div>
  );
}

export default function AccountClient() {
  return (
    <div className="account-page">
      <SignedIn><AccountDetails /></SignedIn>
      <SignedOut>
        <div className="auth-card">
          <span className="eyebrow">ODARIS MC ACCOUNT</span>
          <h1>WELCOME, <em>PLAYER</em></h1>
          <p>Sign in securely to manage your account, continue to checkout, and view your purchase history.</p>
          <div className="clerk-signin-wrap">
            <SignIn routing="hash" appearance={{ elements: { rootBox: 'odaris-clerk-root', card: 'odaris-clerk-card' } }} />
          </div>
          <div className="auth-benefits">
            <div><ShieldCheck size={18}/><span><b>SECURE LOGIN</b><small>Authentication is handled by Clerk.</small></span></div>
            <div><User size={18}/><span><b>ONE ACCOUNT</b><small>Use the same account for checkout and history.</small></span></div>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
