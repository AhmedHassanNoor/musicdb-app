const toPx = (px: number | string) => `${px}px`;

type BreakpointsType = {
    mobile: string;
    tablet: string;
    desktop: string;
  } & string[];

export const breakpointsPx = [768, 1024, 1350];
// Why EMs and not REMs: https://zellwk.com/blog/media-query-units/
const breakpoints: BreakpointsType = breakpointsPx.map((v) => `${v}px`) as any;

const theme = {
  mediaQueries: {
    tinyScreenOnly: `screen and (max-width: 359px)`,
    mobileOnly: `screen and (max-width: ${toPx(breakpointsPx[0] - 1)})`,
    tabletOnly: `screen and (min-width: ${toPx(
        breakpointsPx[0],
    )}) and (max-width: ${toPx(breakpointsPx[1] - 1)})`,
    desktopOnly: `screen and (min-width: ${toPx(breakpoints[1])})`,
    tabletUp: `screen and (min-width: ${toPx(breakpointsPx[0])})`,
    desktopUp: `screen and (min-width: ${toPx(breakpointsPx[1])})`,
    mobileDown: `screen and (max-width: ${toPx(breakpointsPx[0] - 1)})`,
    tabletDown: `screen and (max-width: ${toPx(breakpointsPx[1] - 1)})`,
    desktopDown: `screen and (max-width: ${toPx(breakpointsPx[2] - 1)})`,
  },
  fonts: {
    body: '\'Open Sans\', sans-serif',
    header: '\'Montserrat\', sans-serif',
  },
  shadows: {
    imagesHover: '0px 0px 3px 1px rgba(58,63,71,0.2)',
    cards: '0 0 7px 0 rgba(58, 63, 71, 0.15)',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  maxHeaderWidth: 1400,
  colors: {
    background: '#fff',
    lime: '#3fb0ac',
    accent: '#e50e62',
    lightGrey: '#d4dce2',
    mediumGrey: '#99abb9',
  },
  fontSizes: [4, 8, 12, 16, 20, 24, 28, 32],
};

Object.freeze(theme);

export default theme;
