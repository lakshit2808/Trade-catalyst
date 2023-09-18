import React from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {CompaniesDropdown} from './companies-dropdown';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
// import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
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
                        isActive={router.pathname === '/accounts'}
                        title="HST Execution Engine"
                        icon={<SiGoogleearthengine />}
                        href="accounts"
                     />
                     <SidebarItem
                        isActive={router.pathname === '/payments'}
                        title="Instant Decision Triggers"
                        icon={<RiRobot2Fill />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/customers'}
                        title="Smart Order Optimization"
                        icon={<FaMicrochip />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/products'}
                        title="Performance Review Hub"
                        icon={<BsFileEarmarkBarGraphFill />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/reports'}
                        title="Broker Bridge"
                        icon={<BiLinkAlt />}
                     />                     
                  </SidebarMenu>

                  <SidebarMenu title="Strategy Analyzer">
                     <SidebarItem
                        isActive={router.pathname === '/developers'}
                        title="OI Analyser"
                        icon={<ImMap />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/view'}
                        title="Built-up Breadth"
                        icon={<GiCardExchange />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/settings'}
                        title="Heat Map"
                        icon={<MdDeveloperBoard />} 
                     />
                  </SidebarMenu>

                  <SidebarMenu title="Position Guardians">
                     <SidebarItem
                        isActive={router.pathname === '/changelog'}
                        title="Quick Liquidity Finder"
                        icon={<FaMagnifyingGlassChart />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/changelog'}
                        title="Payoff Chart"
                        icon={<BsFillPieChartFill />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/changelog'}
                        title="Trap Indicator"
                        icon={<GiGreaseTrap />}
                     />
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size={'sm'}
                     />
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
