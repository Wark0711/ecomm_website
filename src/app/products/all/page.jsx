import { Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import ProdList from "./prodlist";

export default async function Products(params) {

    const productList = await prodView()
    // console.log(productList);

    return (
        <Box>
            <Box></Box>
            <Box>
                <ProdList products={productList.filter(item => item.id !== 14)} />
            </Box>
        </Box>
    )
}

async function prodView() {
    const result = await fetch('https://dummyjson.com/products?limit=41')
    const data = await result.json()
    return data.products
}