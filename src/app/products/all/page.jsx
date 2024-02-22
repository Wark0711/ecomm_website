import { Box } from "@mui/material"
import ProdList from "./prodlist";
import SortFilter from "./sortfilter";

export default async function Products() {

    const productList = await prodView()

    return (
        <Box>
            <SortFilter />
            <ProdList products={productList.filter(item => item.id !== 14)} />
        </Box>
    )
}

async function prodView() {
    const result = await fetch('https://dummyjson.com/products?limit=41')
    const data = await result.json()
    return data.products
}