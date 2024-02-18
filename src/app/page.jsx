import { Avatar, Box, Button, Stack } from '@mui/material'
import styles from './page.module.css'
import Footer from './footer'
import Image from 'next/image'
import bg from '../../public/sbg.jpg'
import chair from '../../public/chair.jpg'
import brick from '../../public/bkbg.jpg'
import Link from 'next/link'
import ProductView from './products'

export default function Home() {
  return (
    <main className={styles.main}>
      <Box my={3}>
        <Box sx={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', borderRadius: 1, minHeight: { xs: 400, md: 450, lg: 500 }, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Box color={'#607d8b'} fontWeight={600} ml={{ xs: 5, sm: 8, md: 10 }} fontSize={{ xs: '32px', sm: '40px', md: '60px' }} lineHeight={{ xs: '2.5rem', sm: '3rem', md: '4.5rem' }} >
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
        <Box mt={3} display={'flex'} alignItems={'center'} flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} gap={2}>
          <Box maxHeight={300} display={'flex'} alignItems={'center'}>
            <Image src={chair} style={{ width: '100%', height: '300px' }} alt='No img' />
          </Box>
          <Box maxHeight={300} sx={{ backgroundImage: `url(${brick.src})`, width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '100%' }, height: 300, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box ml={{ xs: 5, sm: 8, md: 12 }}>
              <Box color={'#607d8b'} fontSize={{ xs: '30px', sm: '36px', md: '42px' }} fontWeight={500}>Chair Collection!</Box>
              <Box color={'#607d8b'} fontWeight={500}>Launch Offer 15% Off!</Box>
              <Box mt={3} width={180}>
                <Link href={'/products/all'} className='nav-links'>
                  <Box className={styles['ft-btn2']}>View Collection</Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <ProductView />
        <Box my={3} bgcolor={'#f0f0f0'} py={6} px={4} display={'flex'} justifyContent={'center'} flexDirection={'column'} borderRadius={1}>
          <Box width={'100%'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Box color={'#607d8b'} fontSize={{ xs: '1.25rem', sm: '2rem' }}>Testimonials</Box>
            <Box width={'8%'} my={2} height={2} bgcolor={'#607d8b'}></Box>
          </Box>
          <Box width={'100%'} fontSize={'18px'} display={'flex'} alignItems={'center'} gap={4} flexDirection={{xs: 'column', sm: 'column', md: 'row'}}>
            <Box width={{xs: '90%', sm: '80%', md: '33%'}} color={"#3a3a3a"}>
              <Box>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure earum a magnam nostrum, nesciunt repudiandae quidem minima culpa esse dolorum dolore.</Box>
              <Box mt={4} mb={3} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Box>
                  <Avatar alt='nil' sx={{ width: 60, height: 60 }} />
                </Box>
                <Box>Patricia Warren</Box>
              </Box>
            </Box>
            <Box width={{xs: '90%', sm: '80%', md: '33%'}} color={"#3a3a3a"}>
              <Box>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure earum a magnam nostrum, nesciunt repudiandae quidem minima culpa esse dolorum dolore.</Box>
              <Box mt={4} mb={3} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Box>
                  <Avatar alt='nil' sx={{ width: 60, height: 60 }} />
                </Box>
                <Box>Patricia Warren</Box>
              </Box>
            </Box>
            <Box width={{xs: '90%', sm: '80%', md: '33%'}} color={"#3a3a3a"}>
              <Box>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure earum a magnam nostrum, nesciunt repudiandae quidem minima culpa esse dolorum dolore.</Box>
              <Box mt={4} mb={3} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Box>
                  <Avatar alt='nil' src='' sx={{ width: 60, height: 60 }} />
                </Box>
                <Box>Patricia Warren</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  )
}
