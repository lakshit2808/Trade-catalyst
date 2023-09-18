import React from 'react';
import {useLockedBody} from '../hooks/useBodyLock';
import {NavbarWrapper} from '../navbar/navbar';
import {SidebarWrapper} from '../sidebar/sidebar';
import {SidebarContext} from './layout-context';
import {WrapperLayout} from './layout.styles';
import { useSession } from 'next-auth/react';
import AppLayout from './AppLayout';
import Login from '../Auth/Login';
interface Props {
   children: React.ReactNode;
}

const ComponentRender = ({children}: Props) =>
{
   const session = useSession()
   {data:session}
   if (session.data === null)
   {
      return <Login/>
   }
   else{
      return <AppLayout children = {children}/>
   }

}


export const Layout = ({children}: Props) => {

   
   return (
      <ComponentRender children = {children}/>
   );
};