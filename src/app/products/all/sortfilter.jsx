'use client'

import React, { useState } from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { HiAdjustments } from "react-icons/hi";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

export default function SortFilter() {

    const [open, setOpen] = useState(false);
    const [color, setColor] = useState({ list: '#3a3a3a', grid: '#607d8b' })

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box my={{ xs: 0, sm: 4 }} py={{ xs: 1, sm: 0 }} position={{ xs: 'fixed', sm: 'static' }} bottom={{ xs: 0, sm: 'auto' }} width={{ xs: 'calc(100% - 16px)', sm: 'auto' }} mx={{ xs: 0, sm: 1, md: 1.5 }} zIndex={100} backgroundColor={'#ffffff'}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <Box sx={{ display: 'flex', borderRadius: 1, alignItems: 'center', color: '#607d8b', '&:hover': { color: '#fff', backgroundColor: '#607d8b', cursor: 'pointer' }, fontWeight: 600, gap: 1, paddingY: 1, paddingX: 2, border: '2px solid #607d8b', transitionDuration: '250ms' }} onClick={toggleDrawer(true)}>
                        <Box sx={{ transform: 'rotate(90deg)' }}><HiAdjustments /></Box>
                        <Box>Filter</Box>
                    </Box>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <Box sx={{ width: 300, display: 'flex', alignItems: 'center', justifyContent: 'end' }} role="presentation" onClick={toggleDrawer(false)}>

                        </Box>
                    </Drawer>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 20, color: color.grid }} onClick={() => setColor({list: '#3a3a3a', grid: '#607d8b'})}><IoGridSharp /></Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 20, color: color.list }} onClick={() => setColor({grid: '#3a3a3a', list: '#607d8b'})}><FaThList /></Box>
                </Box>
            </Box>
        </Box>
    )
}