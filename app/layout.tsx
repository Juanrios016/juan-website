import Footer from './footer';
import './globals.css';
import NavBar from './components/navbar';
import { Montserrat, Bebas_Neue, Roboto_Slab } from "next/font/google";


export const metadata = {
  title: 'Juan Rios - Software Engineer',
  description: "Welcome to Juan Rios' website where you can learn more about him, his past experiences, and projects",
};

const montserrat = Montserrat ({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"]
});

const bebas_neue = Bebas_Neue({
  weight:["400"],
  variable: "--font-bebas_neue",
  subsets: ["latin"]
});

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto_slab',
  weight: ['400']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      

      <body className={`${roboto_slab.className} ${montserrat.className} bg-white font-roboto_slab text-base`} >
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
