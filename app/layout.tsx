import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LayerPath Forms',
  description: 'LayerPath form creator',
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
     
      <body className={inter.className}>{children}</body>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'/>
    </html>
  )
}
