import Box from '@mui/material/Box';
import logo from '../../public/footer-bg.jpg'
import Image from 'next/image';
import styles from './page.module.css'
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaInstagram } from 'react-icons/fa'
import Link from 'next/link';

export default function Footer() {
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${logo.src})`, backgroundPosition: 'center center', borderRadius: 1, minHeight: { xs: 200, sm: 300 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className={styles['ft-box']}>
                    <Box sx={{ fontSize: { xs: 21, sm: 24 }, fontWeight: 500 }}>Connect with Us</Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                        <Link className='nav-link' href={'#'}>
                            <Box className={styles.ft}>
                                <FaFacebook className={styles['ft-logo']} />
                            </Box>
                        </Link>
                        <Link className='nav-link' href={'#'}>
                            <Box className={styles.ft}>
                                <FaTwitter className={styles['ft-logo']} />
                            </Box>
                        </Link>
                        <Link className='nav-link' href={'#'}>
                            <Box className={styles.ft}>
                                <FaGoogle className={styles['ft-logo']} />
                            </Box>
                        </Link>
                        <Link className='nav-link' href={'#'}>
                            <Box className={styles.ft}>
                                <FaYoutube className={styles['ft-logo']} />
                            </Box>
                        </Link>
                        <Link className='nav-link' href={'#'}>
                            <Box className={styles.ft}>
                                <FaInstagram className={styles['ft-logo']} />
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'top', justifyContent: 'space-around', gap: 4, flexWrap: 'wrap', my: 8 }}>
                    <Box>
                        <Box sx={{ color: '#3a3a3a', fontWeight: 500, fontSize: 19 }}>Shop</Box>
                        <Box mt={2}>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link1</Link>
                            </Box>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link2</Link>
                            </Box>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link3</Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ color: '#3a3a3a', fontWeight: 500, fontSize: 19 }}>Buyer</Box>
                        <Box mt={2}>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link1</Link>
                            </Box>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link2</Link>
                            </Box>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link3</Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ color: '#3a3a3a', fontWeight: 500, fontSize: 19 }}>Seller</Box>
                        <Box mt={2}>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link1</Link>
                            </Box>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link2</Link>
                            </Box>
                            <Box my={1}>
                                <Link className={styles['foot-links']} href={'#'}>Link3</Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ color: '#3a3a3a', fontWeight: 500, fontSize: 19 }}>Have Questions?</Box>
                        <Box mt={2}>
                            <Link href={'/contact-us'} className='nav-links'>
                                <Box className={styles['ft-btn']}>
                                    Contact Us
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box sx={{ backgroundColor: '#3a3a3a', color: '#ffffff', fontSize: '14px', borderRadius: 1, display: 'flex', alignItems: 'top', justifyContent: { xs: 'center', sm: 'space-between' }, flexWrap: 'wrap' }}>
                    <Box fontFamily={'Poppins, sans-serif'} pt={{ xs: 2.5, sm: 3 }} px={2}>Copyright &copy; {`${new Date().getFullYear()}`} WDT Express</Box>
                    <Box fontFamily={'Poppins, sans-serif'} p={{ xs: 2.5, sm: 3 }} px={2}>Powered by WDT Express</Box>
                </Box>
            </Box>
        </Box>
    )
}