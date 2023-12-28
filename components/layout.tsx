
import Container from './container';
import Footer from './footer'
import Header from './header';
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Container>
        <div className="min-h-screen">
          <Header />
        
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
