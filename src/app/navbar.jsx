import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../../public/ecomm_logo.png'
import { IoIosCart } from 'react-icons/io'
import Link from 'next/link';
import Draw from './draw';

export default function Navbar() {
    return (
        <Box boxShadow={'0 3px 3px -3px gray'}>
            <Box className='navbar' sx={{ color: '#000', mx: { sm: 1, md: 1.5 } }}>
                <Box className='nav-dsk' sx={{ py: '16px', display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box display={'flex'} alignItems={'center'} gap={'32px'}>
                        <Box><Link href={'/'}><Image src={logo} alt='no_img' width={'182'} /></Link></Box>
                        <Box display={'flex'} alignItems={'center'} gap={'16px'}>
                            <Box><Link className='nav-link' href={'/products/all'}>All Products</Link></Box>
                            <Box><Link className='nav-link' href={'/products/list'}>List</Link></Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={'16px'}>
                        <Box><Link className='nav-link' href={'/about-us'}>About Us</Link></Box>
                        <Box><Link className='nav-link' href={'/account'}>My Account</Link></Box>
                        <Box fontWeight={'600'} color={'#78909c'}>&#8377;0.00</Box>
                        <Box position={'relative'} height={'22px'}>
                            <IoIosCart size={'22px'} color='#78909c' />
                            <Box position={'absolute'} sx={{ backgroundColor: '#78909c', top: -8, right: -8, height: '16px', width: '16px', textAlign: 'center', borderRadius: '50%', fontSize: '12px', fontWeight: '600' }}>0</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='nav-mob' sx={{ py: '16px', display: { xs: 'flex', sm: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box><Link href={'/'}><Image src={logo} alt='no_img' width={'150'} /></Link></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'16px'}>
                        <Box fontWeight={'600'} color={'#78909c'}>&#8377;0.00</Box>
                        <Box position={'relative'} height={'22px'}>
                            <IoIosCart size={'22px'} color='#78909c' />
                            <Box position={'absolute'} sx={{ backgroundColor: '#78909c', top: -8, right: -8, height: '16px', width: '16px', textAlign: 'center', borderRadius: '50%', fontSize: '12px', fontWeight: '600' }}>0</Box>
                        </Box>
                        <Draw />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}