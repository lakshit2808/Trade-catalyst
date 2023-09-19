import React from 'react';
import { useSession } from 'next-auth/react';
import AppLayout from './AppLayout';
import { useRouter } from 'next/router';
interface Props {
   children: React.ReactNode;
}

const ComponentRender = ({children}: Props) =>
{
   // const router =  useRouter();
   // const session = useSession()
   // {data:session}

   // if (session.data === null)
   // {
   //    router.push("/api/auth/signin")
   // }
   // else{
   //    return <AppLayout children = {children}/>
   // }
   // return null;

   return <AppLayout children = {children}/>
}


export const Layout = ({children}: Props) => {
   return (
      <ComponentRender children = {children}/>
   );
};