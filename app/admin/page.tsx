'use client';

import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import StoreClient from '../store/StoreClient';

const ADMIN_EMAIL = 'aaravg78201333@gmail.com';

function AdminGuard(){
  const { user, isLoaded } = useUser();
  if (!isLoaded) return <div style={{padding:40}}>Loading...</div>;
  const email = user?.primaryEmailAddress?.emailAddress?.toLowerCase();
  if (email !== ADMIN_EMAIL.toLowerCase()) return <div style={{padding:40}}>Access denied.</div>;
  return <StoreClient view="admin"/>;
}

export default function AdminPage(){
  return <><SignedOut><RedirectToSignIn /></SignedOut><SignedIn><AdminGuard /></SignedIn></>;
}
