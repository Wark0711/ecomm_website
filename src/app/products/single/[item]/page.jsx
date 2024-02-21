import { Box } from "@mui/material";

export default function SingleItem({params}) {
    
    return (
        <Box my={2} textAlign={'center'}>
            <Box height={200}></Box>
            <Box>{params.item}</Box>
        </Box>
    )
}