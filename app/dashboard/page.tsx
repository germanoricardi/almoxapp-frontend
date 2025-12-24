'use client';

import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {session?.user?.name || session?.user?.email}!</p>
      <p>Seu accessToken: {session?.accessToken}</p>
      <p>
        <button onClick={() => signOut({
          redirect: true,
          callbackUrl: '/'
        })}>Sair</button>
      </p>
    </div>
);
  
}