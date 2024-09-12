import { MantineThemeOverride, createTheme } from '@mantine/core';

const theme: MantineThemeOverride = createTheme({
  fontFamily: 'Kiwi Maru, serif',
  defaultRadius: 'md',
  breakpoints: {
    xs: '576px', // Extra small screens (phone)
    sm: '768px', // Small screens (tablet)
    md: '992px', // Medium screens (laptop)
    lg: '1200px', // Large screens (desktop)
    xl: '1440px', // Extra large screens (large desktops)
  },
});

export default theme;
