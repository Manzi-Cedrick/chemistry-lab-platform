import VideoBased from './(components)/AdVideoBased'
import CompanyManage from './(components)/CompanyManage'
import PartnerSection from './(components)/Partner'
import FooterReference from './(components)/FooterReference'
import Hero from './(components)/Hero'
import Contact from './(components)/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psurplus Homepage Welcome!',
  description: 'Welcome to the homepage application of Psurplus platform, feel free to check around!'
}
export default function Home() {
  return (
    <main>
      <Hero />
      <VideoBased />
      <CompanyManage />
      <PartnerSection />
      <Contact />
      <FooterReference />
    </main>
  )
}
