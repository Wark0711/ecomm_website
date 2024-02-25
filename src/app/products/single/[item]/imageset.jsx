'use client'

import React, { useState } from 'react'
import { Box } from "@mui/material";
import Image from "next/image";

export default function Imgset({ imgList, thumbnail }) {

    const [active ,setActive] = useState(thumbnail)

    return (
        <Box>
            <Box sx={{ aspectRatio: 16 / 9 }} position={'relative'}>
                <Image src={active} fill alt="no img" />
            </Box>
            <Box position={'relative'} mt={2} gap={1} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}> 
                {
                    imgList?.map((item, index) => (
                        <Image style={{cursor: 'pointer'}} key={index} src={item} width={80} height={50} alt="no img" responsive='true' onClick={() => setActive(item)} />
                    ))
                }
            </Box>
        </Box>
    )
}