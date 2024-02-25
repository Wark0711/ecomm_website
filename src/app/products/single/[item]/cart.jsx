'use client'

import { Box } from "@mui/material"
import { useState } from "react"

export default function Cart() {

    const [items, setItems] = useState(1)

    return (
        <Box my={2} display={'flex'}  alignItems={'center'} gap={3} justifyContent={'space-between'} flexWrap={'wrap'}>
            <Box display={'flex'} alignItems={'center'}>
                <Box sx={{ height: 24, width: 24, padding: 1, display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#f2f2f2' }, justifyContent: 'center', border: '1px solid #dddddd', cursor: 'pointer' }} onClick={() => setItems(c => c > 2 ? c - 1 : 1)}>-</Box>
                <Box sx={{ height: 24, width: 24, padding: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #dddddd', color: '#78909c' }}>{items}</Box>
                <Box sx={{ height: 24, width: 24, padding: 1, display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#f2f2f2' }, justifyContent: 'center', border: '1px solid #dddddd', cursor: 'pointer' }} onClick={() => setItems(c => c < 5 ? c + 1 : c)}>+</Box>
            </Box>
            <Box sx={{ display: 'flex', borderRadius: 1, alignItems: 'center', flexDirection:'column', color: '#607d8b', '&:hover': { color: '#fff', backgroundColor: '#607d8b', cursor: 'pointer' }, fontWeight: 600, gap: 1, paddingY: 1, paddingX: 2, border: '2px solid #607d8b', transitionDuration: '250ms', minWidth: {xs: 120, sm: 150, md: 200} }}>
                <Box textAlign={'center'}>Add to Cart</Box>
            </Box>
        </Box>
    )
}