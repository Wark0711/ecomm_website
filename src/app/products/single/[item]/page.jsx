import { Box } from "@mui/material";

export default function SingleItem({params}) {
    
    console.log(params)

    return (
        <Box my={2} textAlign={'center'}>
            {params.item}
        </Box>
    )
}