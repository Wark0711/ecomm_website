import { Box } from "@mui/material";

export default function Account() {
    return (
        <Box>
            <Box my={3} mx={1} textAlign={'center'} fontSize={'32px'} color={'#78909c'} fontWeight={700}>My Account</Box>
            <Box display={'flex'} sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' } }} alignItems={'center'} justifyContent={'space-around'} gap={2}>
                <Box>
                    <Box>Buyer</Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
                <Box>
                    <Box>Seller</Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}