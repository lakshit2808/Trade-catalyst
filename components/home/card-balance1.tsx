import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { CiMoneyBill } from 'react-icons/ci';

export const CardBalance1 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <CiMoneyBill size={"2rem"} />
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                     Funds Available
                  </Text>
                  <Text span css={{color: 'white'}} size={'$xs'}>
                     3 Broker Connected
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
                  ₹45,910
               </Text>
               <Text span css={{color: '$green600'}} size={'$xs'}>
                  + 4.5%
               </Text>
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Box>
                  <div className='home-text-title'>Trading Turnover</div>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {/* {'↓'} */}
                     {'↑'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     100,930
                  </Text>
               </Box>
               <Box>
               <div className='home-text-title'>24h Change</div>
                  <Text
                     span
                     size={'$xs'}
                     // css={{color: '$red600'}}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'↑'}
                  </Text>
               
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     2065.95
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
