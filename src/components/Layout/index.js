import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <div className="layout-container">
    <div className="responsive-layout-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
