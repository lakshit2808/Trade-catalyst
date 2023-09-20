import {Text} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {Flex} from '../styles/flex';
import { SiGoogleearthengine } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';

function HST() {
  return (
    <div>
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Breadcrumbs>
            <Crumb>
               <AiFillHome />
               <Link href={'/'}>
                  <CrumbLink href="#">Home</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>

            <Crumb>
               <SiGoogleearthengine />
               <CrumbLink href="#">HST Engine</CrumbLink>
            </Crumb>
         </Breadcrumbs>
      </Flex>
    </div>
  )
}

export default HST
