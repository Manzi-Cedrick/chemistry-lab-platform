import VideoBased from './(components)/(home)/AdVideoBased'
import CompanyManage from './(components)/(home)/CompanyManage'
import PartnerSection from './(components)/(home)/Partner'
import FooterReference from './(components)/FooterReference'
import Hero from './(components)/(home)/Hero'
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
