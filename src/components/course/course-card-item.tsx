import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Course } from '@/interfaces/course'
import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Sesuaikan dengan ukuran yang diinginkan
        p: 2,
      }}
    >
      {/* Render Image jika ada logo */}
      {item.company?.logo ? (
        <Image
          src={item.company.logo}
          alt="Tech Stack Logo"
          width={100} // Sesuaikan ukuran gambar
          height={100} // Sesuaikan ukuran gambar
          objectFit="contain" // Memastikan logo tampil proporsional
        />
      ) : (
        <Box sx={{ width: 100, height: 100, backgroundColor: 'grey.300' }}>
          {/* Fallback jika tidak ada logo */}
          <span>Logo not available</span>
        </Box>
      )}
    </Box>
  )
}

export default CourseCardItem
