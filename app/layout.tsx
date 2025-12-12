import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BootstrapClient from '@/components/BootstrapClient'

export const metadata: Metadata = {
  title: 'Weblemek Dijital Çözümler | Dijital Pazarlama Stratejisi',
  description: 'Dijital pazarlama, web yazılım ve kurumsal kimlik yönetimi konularında stratejik çözümlerle markanızın gücünü artırın.',
  keywords: 'dijital pazarlama, web tasarım, sosyal medya yönetimi, kurumsal kimlik, SEO',
  authors: [{ name: 'Weblemek' }],
  openGraph: {
    title: 'Weblemek Dijital Çözümler',
    description: 'Markanız için dijital pazarlama odaklı strateji yönetimi!',
    url: 'https://weblemek.com',
    siteName: 'Weblemek',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  )
}
