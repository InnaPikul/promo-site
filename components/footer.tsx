import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-center">
          <p className="mb-6 md:mb-0">Copyright ©2024</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
