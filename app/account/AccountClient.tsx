'use client';

import { useEffect, useState } from 'react';
import { signIn, signOut, getSession } from 'next-auth/react';
import { ArrowRight, LogOut, User, ShieldCheck } from 'lucide-react';

const ADMIN_EMAIL = 'aaravg78201333@gmail.com';

export default function AccountClient() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then(setSession).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="account-page"><div className="auth-card"><span className="eyebrow">ODARIS MC ACCOUNT</span><h1>LOADING...</h1><p>Checking your secure account session.</p></div></div>;

  if (session?.user) {
    const email = session.user.email || '';
    const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
    return <div className="account-page"><div className="account-card">
      <div className="account-avatar"><User /></div>
      <span className="eyebrow">{isAdmin ? 'ADMIN ACCOUNT' : 'ODARIS MC ACCOUNT'}</span>
      <h1>WELCOME BACK, <em>{session.user.name || 'PLAYER'}</em></h1>
      <p>Signed in with <b>{email}</b></p>
      <div className="account-actions">
        <a className="primary" href="/history">PURCHASE HISTORY <ArrowRight /></a>
        {isAdmin && <a className="secondary" href="/admin"><ShieldCheck /> ADMIN PANEL</a>}
        <button className="secondary" onClick={() => signOut({ callbackUrl: '/account' })}><LogOut /> SIGN OUT</button>
      </div>
    </div></div>;
  }

  return <div className="account-page"><div className="auth-card">
    <span className="eyebrow">ODARIS MC ACCOUNT</span>
    <h1>WELCOME, <em>PLAYER</em></h1>
    <p>Use your Google account to securely sign in. No separate store password is required.</p>
    <button className="google-login" onClick={() => signIn('google', { callbackUrl: '/account' })}>
      <span className="google-g">G</span>
      CONTINUE WITH GOOGLE
      <ArrowRight size={18} />
    </button>
    <div className="auth-benefits">
      <div><ShieldCheck size={18}/><span><b>SECURE LOGIN</b><small>Authentication is handled by Google.</small></span></div>
      <div><User size={18}/><span><b>ONE ACCOUNT</b><small>Use the same account for checkout and history.</small></span></div>
    </div>
  </div></div>;
}
