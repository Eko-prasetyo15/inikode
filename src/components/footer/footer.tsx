import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              {/* <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                IniKode
              </Typography>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Kode
              </Typography> */}
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700, '& span': { color: 'black' } }}>
                Ini<span>Kode</span>
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Coursespace is an online learning platform that has been operating since 2018 until now.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          // style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 1, width: '100%' }}>
            © Copyright by @zayyid 2025-2026
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            ✉️
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              <a href="mailto:zayyid@example.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                support-care@zayyid.com
              </a>
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
