import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Clash_Display/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Clash_Display/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Clash_Display/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export { clashDisplay };
