import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  // {
  //   title: 'Access Mudah',
  //   description: 'Access mudah apabila ingin survey/test-drive unit karena mitra Dealer Ruang Hijrah sudah tersebar (Bandung)',
  //   icon: <ArtTrackIcon />,
  // },
  {
    title: 'Komisi Registration',
    description:
      'Dapatkan komisi yang kompetitif untuk setiap mengundag talent/member bootcamp sampai dengan checkout transaksi di inikode ',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Time',
    description: 'Anda bisa menjadi Agen/Marketer IniKode bootcamp di mana saja dan kapan saja ',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Konsultasi Mudah',
    description: 'Konsultasi Mudah dengan group whatsapp dan telegram khusus Agen/Marketer di IniKode bootcamp',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'Mentoring',
    description:
      'Ada nya Mentoring untuk Agen/Marketer yang tidak faham atau ingin mendapatkan strategi pernjualan sebagai Agen/Marketer',
    icon: <ArtTrackIcon />,
  },
  // {
  //   title: 'Auto Zakat',
  //   description: 'Setiap Komisi Transaksi atau Dealing yang Agen/Marketer dapatkan sudah termasuk zakat 2,5%',
  //   icon: <AttachMoneyIcon />,
  // },
]
