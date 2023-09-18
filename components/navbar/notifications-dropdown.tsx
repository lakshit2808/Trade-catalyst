import {Dropdown, Navbar} from '@nextui-org/react';
import React from 'react';
import {NotificationIcon} from '../icons/navbar/notificationicon';

export const NotificationsDropdown = () => {
   return (
      <Dropdown placement="bottom-right">
         <Dropdown.Trigger>
            <Navbar.Item>
               <NotificationIcon />
            </Navbar.Item>
         </Dropdown.Trigger>
         <Dropdown.Menu
            aria-label="Avatar Actions"
            css={{
               '$$dropdownMenuWidth': '340px',
               '$$dropdownItemHeight': '70px',
               '& .nextui-dropdown-item': {
                  'py': '$4',
                  // dropdown item left icon
                  'svg': {
                     color: '$secondary',
                     mr: '$4',
                  },
                  // dropdown item title
                  '& .nextui-dropdown-item-content': {
                     w: '100%',
                     fontWeight: '$semibold',
                  },
               },
            }}
         >
            <Dropdown.Section title="Notificacions">
               <Dropdown.Item
                  key="1"
                  showFullDescription
                  description="Trade faster with AI alerts, automated orders, and advanced analytics."
               >
                  📣 Real-Time Alerts for Pro Traders
               </Dropdown.Item>
               <Dropdown.Item
                  key="2"
                  showFullDescription
                  description="Use our tools for smart trading decisions and stay informed with custom alerts."
               >
                  🚀 Risk Management Made Easy!
               </Dropdown.Item>
               <Dropdown.Item
                  key="3"
                  showFullDescription
                  description="Swift execution, AI alerts, and risk tools for confident trading."
               >
                  📣 Trade Smarter, Not Harder
               </Dropdown.Item>
            </Dropdown.Section>
         </Dropdown.Menu>
      </Dropdown>
   );
};
