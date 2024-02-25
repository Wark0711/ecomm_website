'use client'

import React, { useState } from 'react';
import { Box, Rating, TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Ratings({ details }) {

    const [value, setValue] = useState(0);
    const [ratings, setRatings] = useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    function handleRating(e) {
        const name = e.target.name
        const value = e.target.value
        setRatings((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <Box sx={{ width: '100%', my: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant='fullWidth' centered>
                    <Tab className='tab-list' label="Description" />
                    <Tab className='tab-list' label="Reviews" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {details?.description} {details?.description}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box border={'1px solid #dddddd'} borderRadius={1} p={4} mt={3} width={'75%'} mx={'auto'}>
                    <Box fontWeight={500} color={'#3a3a3a'} fontSize={'20px'}>Be the first to review “{details?.title}”</Box>
                    <Box color={'#3a3a3a'} fontSize={'.95rem'}>Your email address will not be published. Required fields are marked *</Box>
                    <Box display={'flex'} alignItems={'center'} gap={2} mt={3}>
                        <Box fontWeight={500} color={'#3a3a3a'}>Your Rating *</Box>
                        <Rating onChange={handleRating} name='rating' />
                    </Box>
                    <Box mt={2}>
                        <Box mb={1} fontWeight={500} color={'#3a3a3a'}>Your Review *</Box>
                        <TextField name='review' type='text' fullWidth onChange={handleRating} />
                    </Box>
                    <Box mt={2}>
                        <Box mb={1} fontWeight={500} color={'#3a3a3a'}>Name *</Box>
                        <TextField name='name' type='text' fullWidth onChange={handleRating} />
                    </Box>
                    <Box mt={2}>
                        <Box mb={1} fontWeight={500} color={'#3a3a3a'}>Email *</Box>
                        <TextField name='email' type='email' fullWidth onChange={handleRating} />
                    </Box>
                    <Box sx={{ display: 'flex', mt: 4, borderRadius: 1, alignItems: 'center', flexDirection: 'column', color: '#607d8b', '&:hover': { color: '#fff', backgroundColor: '#607d8b', cursor: 'pointer' }, fontWeight: 600, gap: 1, paddingY: 1.5, paddingX: 2, border: '2px solid #607d8b', transitionDuration: '250ms', width: 120 }}>
                        <Box textAlign={'center'}>Submit</Box>
                    </Box>
                </Box>
            </CustomTabPanel>
        </Box>
    )
}

function CustomTabPanel(props) {
    const { children, value, index } = props;

    return (
        <div hidden={value !== index} >
            {
                value === index
                    ? <Box sx={{ py: 1.5, px: 2 }} color={'#3a3a3a'}>
                        <Box>{children}</Box>
                    </Box>
                    : null
            }
        </div>
    );
}


