import type { Agen } from '@/interfaces/agen'

export const data: Array<Agen> = [
  {
    id: 1,
    photo: '/images/head-content2.png',
    name: 'Ini Kursus',
    category: 'UI/UX Design',
    description:
      'Mitra usaha Dealer mobil bekas/baru di Ruang Hijrah yang tentu nya kredibel dan terpercaya dengan methode cash ataupun kredit syariah.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/product/agen.svg',
    name: 'Ini Agen/Marketer',
    category: 'Machine Learning',
    description:
      'Dapatkan penghasilan tambahan dengan menjadi agen/marketer di Ruang Hijrah Seburuk buruk nya agen di Ruang Hijrah adalah dakwah..',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/carier.jpg',
    name: 'Ini Karir',
    category: 'Android Development',
    description:
      'Pembiayaan berbagai kebutuhan yang didukung dengan proses transaksi digital yang cepat yang tentunya Halal, Berkah dan tanpa Riba..',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
]
