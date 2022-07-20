import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  LinkedIn,
  Instagram,
  Facebook,
  GiteRounded,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiPaper: {
      variants: [
        {
          props: {
            variant: 'card',
          },
          style: {
            backgroundColor: 'rgb(34, 43, 69)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '4px',
            boxShadow:
              'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
            backgroundImage:
              ' linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            overflowX: 'hidden',
            overflowY: 'hidden',
            WebKitCSSMatrix: 'center',
            alignItems: 'center',
            color: 'rgb(255, 255, 255)',
            display: 'flex',
            flexDirection: 'colum',
            width: '100%',
            padding: '16px 24px',
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'name',
          },
          style: {
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontSize: '2.375rem',
            fontWeight: 600,
            fontFamily: 'ShamansFuthark',
            color: 'rgb(238, 238, 239)',
          },
        },
        {
          props: {
            variant: 'about1',
          },
          style: {
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontFamily: 'Inter, sans-serif, ShamansFuthark',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            color: 'rgb(219, 190, 1)',
          },
        },
        {
          props: {
            variant: 'about2',
          },
          style: {
            margin: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontFamily: 'Inter sans-serif ShamansFuthark',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.43',
            color: 'rgb(174, 176, 180)',
          },
        },
        {
          props: {
            variant: 'about3',
          },
          style: {
            margin: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontFamily: 'Inter sans-serif ShamansFuthark',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.43',
            color: 'rgb(174, 176, 180)',
          },
        },
        {
          props: {
            variant: 'body',
          },
          style: {
            margin: '16px 0px',
            marginTop: '16px',
            marginRight: '0px',
            marginBottom: '16px',
            marginLeft: '0px',
            fontFamily: 'Inter, sans-serif, ShamansFuthark',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            color: 'rgb(238, 238, 239)',
          },
        },
      ],
    },

    MuiBox: {
      variants: [
        {
          props: {
            variant: 'img',
          },
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
          },
        },
      ],
    },
  },
});

const ProfileCard = () => {
  return (
    <Grid item xs={12}>
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square variant='card'>
          <Box>
            <Box>
              <img
                variant='img'
                className='img'
                src='https://avatars.githubusercontent.com/u/95489256?v=4'
                alt='FerBoina'
              />
            </Box>

            <Box>
              <Typography marginRight={0} variant='name' component={'h2'}>
                Fernando Leonhardt
              </Typography>
            </Box>
            <Box>
              <Typography variant='about1'>web developer</Typography>
            </Box>
            <Box>
              <Typography variant='about2'>
                Auctioneer, Live Stock, and Real Estate Broker-.
              </Typography>
            </Box>
            <Box>
              <Typography variant='about3'>Live Stock Rancher</Typography>
            </Box>
            <Box>
              <Typography variant='body'>
                In 2021, my wife, my four-year-old son, and I emigrated to the
                United States. There, I decided to make a career change into Web
                Development and become a Fullstack Developer. Today, I find
                myself with the desire to develop myself in this field, to be
                able to demonstrate my abilities as a professional, and to be
                part of an organization whose objectives and culture go the same
                way as my expectations, desires, and preferences.
              </Typography>
            </Box>
            <Box variant='about1'>
              <LinkedIn />
              <Instagram />
              <Facebook /> <GiteRounded />
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default ProfileCard;
