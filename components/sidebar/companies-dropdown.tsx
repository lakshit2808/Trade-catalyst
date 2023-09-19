import {Text} from '@nextui-org/react';
import React from 'react';
import {AcmeIcon} from '../icons/acme-icon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface Platform
{
   name: string;
   logo: React.ReactNode;
}
export const CompaniesDropdown = () => {

   const router =  useRouter();
   const session = useSession();
   {data:session}

   const platform: Platform = {
      name: "Trade Catalyst",
      logo: <AcmeIcon/>,
   }

   return (
      <Box>
      <Flex align={'center'} css={{gap: '$7'}}>
         {platform.logo}
         <Box>
            <Text
               h3
               size={'$xl'}
               weight={'medium'}
               css={{
                  m: 0,
                  color: '$accents9',
                  lineHeight: '$lg',
                  mb: '-$5',
               }}
            >
               {platform.name}
            </Text>
            <Text
               span
               weight={'medium'}
               size={'$xs'}
               css={{color: '$accents8'}}
            >
               Hello, {session.data?.user?.name}!
            </Text>
         </Box>
      </Flex>
   </Box>
   );
};
