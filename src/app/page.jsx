import { Box, Button } from '@mui/material'
import styles from './page.module.css'
import Footer from './footer'
import Image from 'next/image'
import bg from '../../public/sbg.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Box my={3}>
        <Box sx={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', borderRadius: 1, minHeight: { xs: 400, md: 450, lg: 500 }, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Box color={'#607d8b'} fontWeight={600} ml={{ xs: 5, sm: 8, md: 10 }} fontSize={{ xs: '32px', sm: '40px', md: '60px' }} lineHeight={{xs: '2.5rem', sm: '3rem', md: '4.5rem'}} >
            <Box>STYLE</Box>
            <Box>COMFORT &</Box>
            <Box>AFFORDABLE</Box>
          </Box>
          <Box mt={6} width={180} ml={{ xs: 5, sm: 8, md: 10 }}>
            <Link href={'/products/all'} className='nav-links'>
              <Box className={styles['ft-btn2']}>Explore Store</Box>
            </Link>
          </Box>
        </Box>
        <Box my={4}>

        </Box>
      </Box>
    </main>
  )
}
