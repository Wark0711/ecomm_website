import { Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default async function ProductView() {

    const products = await prodView()

    return (
        <Box my={10}>
            <Box>
                <Box color={'#607d8b'} textAlign={'center'} fontSize={{ xs: '1.25rem', sm: '2rem' }}>Our Latest Products</Box>
                <Box width={'8%'} mx={'auto'} my={2} height={2} bgcolor={'#607d8b'}></Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} gap={1} flexWrap={'wrap'}>
                {
                    products.map((item, index) => (
                        <Box key={index} my={4}>
                            <Link style={{ textDecoration: 'none', position: 'relative' }} href={`/products/single/${item.id}`}>
                                <Box overflow={'hidden'} position={'relative'}>
                                    <Box sx={{ opacity: 1, '&:hover': { transform: 'scale(1.1)', opacity: .9 }, transitionDuration: '400ms' }}>
                                        <Image alt="nil" style={{ display: 'block', }} height={200} width={300} src={item.thumbnail} />
                                    </Box>
                                    {/* <Box position={'absolute'} top={0} right={5}>
                                        <Box>a</Box>
                                        <Box>a</Box>
                                    </Box> */}
                                </Box>
                            </Link>
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

async function prodView() {
    const result = await fetch('https://dummyjson.com/products?limit=8')
    const data = await result.json()
    return data.products
}