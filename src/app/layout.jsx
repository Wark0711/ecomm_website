import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Box from '@mui/material/Box';
import Footer from './footer'
import Navbar from './navbar';

const inter = Inter({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'WDT Express',
  description: 'a basic ecommerce store',
}

export default function RootLayout({ children }) {
  // console.log(children);
  return (
    <html lang="en">
      <body className={pop.className}>
        <Navbar />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  )
}
