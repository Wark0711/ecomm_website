import { Box, Breadcrumbs, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
import Ratings from "./rating";
import '../../../globals.css'

export default async function SingleItem({ params }) {

    async function prodView() {
        const result = await fetch(`https://dummyjson.com/products/${params.item}`)
        const data = await result.json()
        return data
    }

    const product = await prodView()

    return (
        <Box my={6}>
            <Box display={'flex'} alignItems={'top'} gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                <Box width={{ xs: '100%', sm: '50%', md: '40%' }} sx={{ aspectRatio: 16 / 9 }} position={'relative'}>
                    <Image src={product?.thumbnail} fill alt="no img" />
                </Box>
                <Box width={{ xs: '100%', sm: '50%', md: '60%' }} ml={1}>
                    <>
                        <Breadcrumbs>
                            <Link style={{ color: '#777', textDecoration: 'none' }} href="/">Home</Link>
                            <Link style={{ color: '#777', textDecoration: 'none' }} href="/products/all">Products</Link>
                            <Typography style={{ color: '#777' }}>{product?.title}</Typography>
                        </Breadcrumbs>
                    </>
                    <Box textTransform={'capitalize'} color={'#78909c'} my={1}>{product?.category}, {product?.brand}</Box>
                    <Box textTransform={'uppercase'} color={'#607d8b'} fontWeight={500} fontSize={'1.125rem'}>{product?.title}</Box>
                    <Rating color="#3a3a3a" defaultValue={product?.rating} precision={0.5} readOnly />
                    <Box color={'#3a3a3a'} fontWeight={700} fontSize={'1.25rem'}> <span style={{ textDecoration: 'line-through', color: '#808285', marginRight: '8px' }}>&#8377; {(product?.price * 90 * (1 + (product?.discountPercentage / 100))).toFixed(2)}</span> &#8377; {product?.price * 90}.00</Box>
                    <Box mt={0.5} color={'#3a3a3a'} pr={2}>{product?.description}</Box>
                    <Cart />
                </Box>
            </Box>
            <Ratings details={product} />

        </Box>
    )
}