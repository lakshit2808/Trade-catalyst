import React from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Flex} from '../styles/flex';
import {CompaniesDropdown} from './companies-dropdown';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {useSidebarContext} from '../layout/layout-context';
import {useRouter} from 'next/router';
import { SiGoogleearthengine } from 'react-icons/si';
import { RiRobot2Fill, RiDashboardFill } from 'react-icons/ri';
import { FaMicrochip, FaMagnifyingGlassChart } from 'react-icons/fa6';
import { BsFileEarmarkBarGraphFill, BsFillPieChartFill } from 'react-icons/bs';
import { BiLinkAlt } from 'react-icons/bi';
import { GiCardExchange, GiGreaseTrap } from 'react-icons/gi';
import { ImMap } from 'react-icons/im';
import { MdDeveloperBoard } from 'react-icons/md';



export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Home"
                     icon={<RiDashboardFill />}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="Tools">
                     <SidebarItem
                        isActive={router.pathname === '/hst-execution-engine'}
                        title="HST Execution Engine"
                        icon={<SiGoogleearthengine />}
                        href="hst-execution-engine"
                     />
                     <SidebarItem
                        isActive={router.pathname === '/instant-decision-trigger'}
                        title="Instant Decision Triggers"
                        icon={<RiRobot2Fill />}
                        href='instant-decision-trigger'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/smart-order-optimization'}
                        title="Smart Order Optimization"
                        icon={<FaMicrochip />}
                        href='smart-order-optimization'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/performance-review-hub'}
                        title="Performance Review Hub"
                        icon={<BsFileEarmarkBarGraphFill />}
                        href='performance-review-hub'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/broker-bridge'}
                        title="Broker Bridge"
                        icon={<BiLinkAlt />}
                        href='broker-bridge'
                     />                     
                  </SidebarMenu>

                  <SidebarMenu title="Strategy Analyzer">
                     <SidebarItem
                        isActive={router.pathname === '/oi-analyser'}
                        title="OI Analyser"
                        icon={<ImMap />}
                        href='oi-analyser'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/built-up-breadth'}
                        title="Built-up Breadth"
                        icon={<GiCardExchange />}
                        href='built-up-breadth'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/heat-map'}
                        title="Heat Map"
                        icon={<MdDeveloperBoard />} 
                        href='heat-map'
                     />
                  </SidebarMenu>

                  <SidebarMenu title="Position Guardians">
                     <SidebarItem
                        isActive={router.pathname === '/quick-liquidity-finder'}
                        title="Quick Liquidity Finder"
                        icon={<FaMagnifyingGlassChart />}
                        href='quick-liquidity-finder'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/payoff-chart'}
                        title="Payoff Chart"
                        icon={<BsFillPieChartFill />}
                        href='payoff-chart'
                     />
                     <SidebarItem
                        isActive={router.pathname === '/trap-indicator'}
                        title="Trap Indicator"
                        icon={<GiGreaseTrap />}
                        href='trap-indicator'
                     />
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  {/* <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size={'sm'}
                     />
                  </Tooltip> */}
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
