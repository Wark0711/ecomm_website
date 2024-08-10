import { Box } from "@mui/material"
import ProdList from "./prodlist";
import SortFilter from "./sortfilter";

export default async function Products() {

    const productList = await prodView()
    const exclude = [14, 15, 17, 19, 24]

    return (
        <Box>
            <SortFilter />
            <ProdList products={productList.filter(item => !exclude.includes(item.id))} />
        </Box>
    )
}

async function prodView() {
    const result = await fetch('https://dummyjson.com/products?limit=45')
    const data = await result.json()
    return data.products
}