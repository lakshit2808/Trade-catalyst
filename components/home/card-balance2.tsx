import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { BiBook } from 'react-icons/bi';

export const CardBalance2 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$accents0',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <BiBook color={'$accents9'} size={"2rem"}/>
               <Flex direction={'column'}>
                  <Text span size={"0.8rem"}>
                     Performance Summary
                  </Text>
                  <Text span size={'0.7rem'}>
                     6 Trade Executed
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
               <Text span size={'$xl'} weight={'semibold'}>
                  ₹12,138
               </Text>
               <Text span css={{color: '$red600'}} size={'$xs'}>
                  - 2.45%
               </Text>
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
                
               <Box>
               <div className='home-text-title'>Net PNL</div>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {'↓'}
                  </Text>
                  <Text span size={'$xs'}>
                     297.38
                  </Text>
               </Box>
               <Box>
               <div className='home-text-title'>Max Draw Down</div>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {'↓'}
                  </Text>
                  <Text span size={'$xs'}>
                     1.2%
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
