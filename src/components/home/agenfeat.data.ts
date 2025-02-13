import type { Agen } from '@/interfaces/agen'

export const data: Array<Agen> = [
  {
    id: 1,
    photo: '/images/head-content2.png',
    name: 'Ini Kursus',
    category: 'UI/UX Design',
    description:
      'Ini Kursus adalah bootcamp pemrograman intensif yang dirancang untuk membantu Anda menguasai keterampilan pengembangan perangkat lunak dan teknologi terkini, Anda akan mendapatkan pengetahuan mendalam tentang berbagai bahasa pemrograman seperti JavaScript, Golang, HTML/CSS, dan teknologi lainnya yang banyak digunakan di industri',
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
      'Ini Agen/Marketer adalah peluang bagi Anda untuk menjadi agen marketing di IniKode Bootcamp dan mendapatkan penghasilan tambahan. Sebagai agen, Anda akan memasarkan kursus IniKode Bootcamp yang berfokus pada pembelajaran Pemrograman, Jika Anda memiliki kemampuan untuk memasarkan dan ingin terlibat dalam dunia pendidikan teknologi, Ini Agen/Marketer adalah kesempatan untuk berkontribusi sekaligus menghasilkan penghasilan tambahan.',
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
      'Ini Karir adalah program yang dirancang untuk menyalurkan karir kepada para peserta yang telah menyelesaikan pelatihan di IniKode Bootcamp, khususnya dalam bidang Pemrograman. Program ini bertujuan untuk membantu peserta menemukan peluang kerja di perusahaan-perusahaan terkemuka yang memungkinkan Anda bekerja untuk berbagai proyek yang menarik.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
]
