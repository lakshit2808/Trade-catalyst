import React from 'react';
import {Box} from '../styles/box';
import Chart, {Props} from 'react-apexcharts';

const state: Props['series'] = [
   {
      name: 'Portfolio Growth',
      data: [50000, 40000, 52300, 60000, 62000, 55000, 72000],
   },
   {
      name: 'PNL Growth',
      data: [2500, 2300, 2600, 3200, 3300, 2550, 4300],
   },
];

const options: Props['options'] = {
   chart: {
      type: 'area',
      animations: {
         easing: 'linear',
         speed: 300,
      },
      sparkline: {
         enabled: false,
      },
      brush: {
         enabled: false,
      },
      id: 'basic-bar',
      fontFamily: 'Inter, sans-serif',
      foreColor: 'var(--nextui-colors-accents9)',
      stacked: true,
      toolbar: {
         show: false,
      },
   },

   xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      labels: {
         // show: false,
         style: {
            colors: 'var(--nextui-colors-accents8)',
            fontFamily: 'Inter, sans-serif',
         },
      },
      axisBorder: {
         color: 'var(--nextui-colors-border)',
      },
      axisTicks: {
         color: 'var(--nextui-colors-border)',
      },
   },
   yaxis: {
      labels: {
         style: {
            colors: 'var(--nextui-colors-accents8)',
            fontFamily: 'Inter, sans-serif',
         },
      },
   },
   tooltip: {
      enabled: false,
   },
   grid: {
      show: true,
      borderColor: 'var(--nextui-colors-border)',
      strokeDashArray: 0,
      position: 'back',
   },
   stroke: {
      curve: 'smooth',
      fill: {
         colors: ['red'],
      },
   },
   // @ts-ignore
   markers: false,
};

export const Steam = () => {
   return (
      <>
         <Box
            css={{
               width: '100%',
               zIndex: 5,
            }}
         >
            <div id="chart">
               <Chart
                  options={options}
                  series={state}
                  type="area"
                  height={425}
               />
            </div>
         </Box>
      </>
   );
};
