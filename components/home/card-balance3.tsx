import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { BsBatteryCharging } from 'react-icons/bs';

export const CardBalance3 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$green600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <BsBatteryCharging size={"2rem"}/>
               <Flex direction={'column'}>
                  <Text span css={{color: 'white', fontSize:".8rem"}}>
                     Resource Utilization
                  </Text>
                  <Text span css={{color: 'white'}} size={'$xs'}>
                     7 Tools are in Use
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
               <Text
                  span
                  size={'$xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                  ₹1,910
               </Text>
               <Text span css={{color: '$red600'}} size={'$xs'}>
                  Bill Due
               </Text>
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Box>
               <div className='home-text-title'>Tools</div>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     510
                  </Text>
               </Box>
               <Box>
               <div className='home-text-title'>Strategy Analyzer</div>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                    1302
                  </Text>
               </Box>
               <Box>
               <div className='home-text-title'>Position Guardians</div>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     98
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
