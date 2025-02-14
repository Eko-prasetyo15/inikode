import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'
import Link from 'next/link'
import { StyledButton } from '../styled-button'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const DetailCourse: FC = () => {
  return (
    <Box id="agen" sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#ecf3f3' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={24} md={24}>
            <Typography
              component="h5"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Trial Class (FREE) <Typography variant="h4">belajar pemrograman/web developer secara singkat</Typography>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Dapatkan pengalaman dengan mengikuti Trial Class Web Developer dengan mentor-mentor keren
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ul>
                  <li>
                    <h2>Apa Itu Web Development?</h2>
                    <ol>💡 Penjelasan konsep</ol>
                    <ol>💻 Contoh penerapan</ol>
                    <ol>📢 Diskusi Interaktive</ol>
                  </li>
                  <li>
                    <h2>Perbedaan Frontend & Backend</h2>
                    <ol>📌 Frontend Development</ol>
                    <ol>📌 Backend Development</ol>
                    <ol>📢 Diskusi Interaktive</ol>
                  </li>
                  <li>
                    <h2>Bagaimana Website Berjalan</h2>
                    <ol>🔗 Client vs Server</ol>
                    <ol>🎬 Visualisasi & Demonstrasi</ol>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12} md={6}>
                <ul>
                  <li>
                    <h2>Peluang Karir di Dunia Web Development</h2>
                    <ol>💼 Mengapa Karir di Web Development Menjanjikan?</ol>
                    <ol>📊 Perbandingan Karir Frontend vs Backend vs Fullstack</ol>
                    <ol>🛠 Skill yang Dibutuhkan di Dunia Nyata</ol>
                  </li>
                  <li>
                    <h2>Diskusi & Tanya Jawab</h2>
                    <ol>
                      <h4>📢 Interaksi dengan Peserta</h4>
                    </ol>
                    <ol>
                      <h4>📢 Call to Action: Persiapan ke Session 2</h4>
                      <li>
                        “Jika kamu tertarik dengan Frontend, di session 2 kita akan membuat website sederhana
                        menggunakan HTML, CSS, dan JavaScript.
                      </li>
                      <li>
                        “Jika kamu tertarik dengan Backend, di session 2 kita akan mencoba membuat API sederhana.”
                      </li>
                      <li>
                        “Di session 2 nanti, kita akan melihat lebih dekat bagaimana seorang web developer bekerja!”
                      </li>
                    </ol>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Container style={{ marginTop: '30px', justifyContent: 'end' }}>
              <Grid container>
                <StyledButton
                  disableHoverEffect={true}
                  color="primary"
                  size="extra"
                  variant="contained"
                  onClick={() => {
                    const phoneNumber = '+6281395294204' // Ganti dengan nomor WA yang sesuai
                    const message = encodeURIComponent(
                      'Halo, saya tertarik untuk menngikuti bootcamp free session. Bisa berikan informasi lebih lanjut?'
                    )
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
                  }}
                >
                  Daftar Class Sekarang
                </StyledButton>
              </Grid>
            </Container>
          </Grid>
          {/* <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/images/daniel-korpai-pKRNxEguRgM-unsplash.jpg"
                layout="fill" // Agar gambar penuh sesuai parent-nya
                objectFit="cover" // Supaya gambar menyesuaikan tanpa merusak aspek rasio
                quality={97}
                alt="Feature img"
              />
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  )
}

export default DetailCourse
