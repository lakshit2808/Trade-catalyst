import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {Layout} from '../components/layout/layout';
import {SessionProvider} from "next-auth/react"
import { Session } from "next-auth";

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps}: AppProps<{ session: Session; }>) {
   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <SessionProvider session={pageProps.session}>
         <NextUIProvider>
            {/* For Auth*/}
            
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </NextUIProvider>
         </SessionProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
