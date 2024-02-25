import { Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default async function RelatedProduct({ category, id }) {

    async function prodView() {
        const result = await fetch(`https://dummyjson.com/products/category/${category}`)
        const data = await result.json()
        return data?.products?.filter(item => item.id !== id )
    }

    const product = await prodView()

    return (
        <Box>
            <Box color={'#607d8b'} textAlign={'center'} fontSize={{xs: 20, sm: 24, md: 32}} fontWeight={600}>Related Products</Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} gap={1} flexWrap={'wrap'}>
                {
                    product.map((item, index) => (
                        <Box key={index} my={4}>
                            <Box overflow={'hidden'} position={'relative'}>
                                <Box sx={{ opacity: 1, '&:hover': { transform: 'scale(1.1)', opacity: .9 }, transitionDuration: '400ms' }}>
                                    <Link style={{ textDecoration: 'none', position: 'relative' }} href={`/products/single/${item.id}`}>
                                        <Image alt="nil" style={{ display: 'block', }} height={200} width={300} src={item.thumbnail} />
                                    </Link>
                                </Box>
                            </Box>
                            <Box px={3}>
                                <Box fontSize={'.85rem'} color={'#808285'} my={.5} textTransform={'capitalize'}>{item.category}</Box>
                                <Box color={'#607d8b'} fontWeight={600}>{item.title}</Box>
                                <Box color={'#3a3a3a'} fontWeight={700} fontSize={'.9rem'}> <span style={{ textDecoration: 'line-through', color: '#808285', marginRight: '8px' }}>&#8377; {(item.price * 90 * (1 + (item.discountPercentage / 100))).toFixed(2)}</span> &#8377; {item.price * 90}.00</Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}