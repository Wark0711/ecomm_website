'use client'
import { Box, Button, TextField } from "@mui/material";
import { MdSend } from "react-icons/md";

export default function Fpass() {

    return(
        <Box>
            <Box my={8} mx={'auto'} maxWidth={'550px'} p={5} border={'1px solid #dddddd'} borderRadius={1} color={'#3a3a3a'}>
                <Box mb={3} textAlign={'center'} color={'#607d8b'} fontSize={'32px'} fontWeight={700}>Forgot password?</Box>
                <Box mb={2} lineHeight={1.5}>Please enter your email address. You will receive a link to create a new password via email.</Box>
                <TextField required fullWidth label="Enter email" type="email" />
                <Box mt={2.5}>
                    <Button variant="contained" sx={{backgroundColor: '#78909c', '&:hover': { backgroundColor: '#607d8b'}}} endIcon={<MdSend />}>Send Email</Button>
                </Box>
            </Box>
        </Box>
    )
}