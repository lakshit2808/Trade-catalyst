import {Dropdown, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {AcmeIcon} from '../icons/acme-icon';
import {AcmeLogo} from '../icons/acmelogo';
import {BottomIcon} from '../icons/sidebar/bottom-icon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image';
import platform_logo from "./../../assets/logo.png"

interface Platform
{
   name: string;
   logo: React.ReactNode;
}
export const CompaniesDropdown = () => {

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
               Hello, James!
            </Text>
         </Box>
      </Flex>
   </Box>
   );
};
