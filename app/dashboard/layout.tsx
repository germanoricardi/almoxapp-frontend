'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log('status:', status);
  }, [status])

  if (status === "unauthenticated") router.push('/');

  return status === "authenticated"
    ? children
    : <></>;
}
