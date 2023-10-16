'use client'

import { Box, Drawer, Button, } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { MdOutlineMenu, MdClear } from 'react-icons/md'

export default function Draw() {

    const [open, setOpen] = useState(false)

    return (
        <Box>
            <Box height={'24px'} zIndex={'10'} ml={2}>
                <MdOutlineMenu onClick={() => setOpen(true)} color='#607d8b' fontSize={'24px'} />
            </Box>
            <Drawer anchor="top" open={open} sx={{ width: 1 }}>
                <Box sx={{ backgroundColor: '#f9f9f9', border: '1px solid #dddddd' }}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} my={1}>
                        <Box ml={2} color={'#607d8b'} fontWeight={600}>MENU</Box>
                        <Button><MdClear onClick={() => setOpen(false)} color='#607d8b' fontSize={'24px'} /></Button>
                    </Box>
                    <Box>
                        <Box px={2} py={1.5} borderTop={'1px solid #dddddd'}><Link className='nav-link' href={'/products/all'}>All Products</Link></Box>
                        <Box px={2} py={1.5} borderTop={'1px solid #dddddd'}><Link className='nav-link' href={'/products/list'}>List</Link></Box>
                        <Box px={2} py={1.5} borderTop={'1px solid #dddddd'}><Link className='nav-link' href={'/about-us'}>About Us</Link></Box>
                        <Box px={2} py={1.5} borderTop={'1px solid #dddddd'}><Link className='nav-link' href={'/account'}>My Account</Link></Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}