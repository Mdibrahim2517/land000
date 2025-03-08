import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { styles } from './styles';
import { CssBaseline, Stack, } from '@mui/material';

const Main = () => {
  return (
    <PerfectScrollbar style={styles.container} id="scrollableDiv">
      <CssBaseline />
      <Stack width={styles.innerContainer}>

      </Stack>
    </PerfectScrollbar>
  );
};

export default Main;