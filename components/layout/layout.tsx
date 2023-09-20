import React from 'react';
import { useSession } from 'next-auth/react';
import AppLayout from './AppLayout';
import { useRouter } from 'next/router';

interface ComponentRenderProps {
  children: React.ReactNode;
}

const ComponentRender: React.FC<ComponentRenderProps> = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session === null) {
    router.push("/api/auth/signin");
    return null;
  } else {
    return <AppLayout>{children}</AppLayout>;
  }
  // return <AppLayout>{children}</AppLayout>;
}

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ComponentRender>
      {children}
    </ComponentRender>
  );
};
