import {Avatar, Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardTransactions = () => {
   return (
      <Card
         css={{
            mw: '375px',
            height: 'auto',
            bg: '$accents0',
            borderRadius: '$xl',
            // alignContent: 'start',
            justifyContent: 'start',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}} justify={'center'}>
               <Text h3 css={{textAlign: 'center'}}>
                  Latest Transactions
               </Text>
            </Flex>
            <Flex
               css={{gap: '$6', py: '$4'}}
               // align={'center'}

               direction={'column'}
            >
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Text span size={'$base'} weight={'semibold'}>
                  Nifty 17000 CE
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     +4500
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/20/2023
                  </Text>
               </Flex>

               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Text span size={'$base'} weight={'semibold'}>
                  BankNifty 43000 PE
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     +4500
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/17/2023
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Text span size={'$base'} weight={'semibold'}>
                  Nifty 19500 PE
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     +1500
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/13/2023
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Text span size={'$base'} weight={'semibold'}>
                  BankNifty 46000 CE
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     +200
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/10/2023
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Text span size={'$base'} weight={'semibold'}>
                  BankNifty 44000 CE
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                    +2444
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/14/2023
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">

                  <Text span size={'$base'} weight={'semibold'}>
                  Nifty 16050 CE
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     +3000
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/10/2023
                  </Text>
               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};
