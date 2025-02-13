import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { MokasCardItem } from '@/components/mobilbekas'
import { data } from './popular-course.data'
import Link from 'next/link'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '', marginBottom: '24px' },
}))

const HomeMokas: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  // const sliderConfig: Settings = {
  //     infinite: true,
  //     // autoplay: true,
  //     speed: 300,
  //     slidesToShow: matchMobileView ? 1 : 3,
  //     slidesToScroll: 1,
  //     prevArrow: <SliderArrow type="prev" />,
  //     nextArrow: <SliderArrow type="next" />,
  //     dots: true,
  //     appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  //     customPaging: () => (
  //         <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
  //     ),
  // }
  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 3,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="mobilbekas"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          alignItems="center" // Menjaga elemen tetap seimbang secara vertikal
        >
          <Grid item xs={9} md={9}>
            <Typography variant="h1" sx={{ fontSize: { xs: 30, sm: 40 } }}>
              Ini Kursus
            </Typography>
          </Grid>

          <Grid item xs={3} md={3}>
            <Link href="/car-list" passHref>
              <Button
                size="small"
                sx={{
                  width: '100%',
                  fontSize: { xs: '0.75rem', sm: '1rem' }, // Sesuaikan ukuran font tombol
                  padding: { xs: '6px 10px', sm: '8px 16px' },
                }}
              >
                Selengkapnya
              </Button>
            </Link>
          </Grid>
        </Grid>

        <StyledSlickContainer>
          <Slider {...sliderConfig}>
            {data.map((_, index) => (
              // <Grid item xs={2} sm={4} md={4} key={index}>
              <Box sx={{ padding: '10px' }} key={index}>
                <Card sx={{ maxWidth: '100%', borderRadius: '20px' }}>
                  <CardMedia sx={{ height: 400 }} image={_.cover} title="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {_.price}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {_.session}
                    </Typography>
                    <Typography variant="body1" component="strong">
                      {_.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category : {_.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Share</Button> */}
                    <Button
                      size="small"
                      href="https://wa.me/+6281395294204?text=Halo%20Agen%2C%20saya%20ingin%20bertanya"
                      target="_blank"
                    >
                      Hubungi Marketing/Agen
                    </Button>
                  </CardActions>
                </Card>
              </Box>
              // </Grid>
            ))}
          </Slider>
        </StyledSlickContainer>
      </Container>
    </Box>
  )
}

export default HomeMokas
