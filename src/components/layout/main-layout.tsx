import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Footer } from '../footer';
import { Header } from '../header';
import { useRouter } from 'next/dist/client/router';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps): JSX.Element => {
  const router = useRouter()
  return (
    <Box component="main">
      {router.pathname.includes('signup') || router.pathname.includes('signin') ?
        (
          <>
            {children}
          </>
        ) :
        (
          <>
            <Header />
            {children}
            <Footer />
          </>

        )
      }

    </Box>
  );
}

export default MainLayout;
