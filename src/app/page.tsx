import VideoBased from './(components)/AdVideoBased'
import CompanyManage from './(components)/CompanyManage'
import PartnerSection from './(components)/Partner'
import FooterReference from './(components)/FooterReference'
import Hero from './(components)/Hero'
import Contact from './(components)/Contact'

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
