import React, { memo } from 'react';
import { Box } from 'components/_global/box';
import theme from 'themes';

// Simple Footer
const Footer = () => <Box py={[4, 5, 5]} backgroundColor={theme.colors.lightGrey}></Box>;

export default memo(Footer);
