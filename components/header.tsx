import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-end py-10'>
      <div className='text-6xl font-bold leading-none '>
        <Link href="/">LOGO.</Link>
      </div>
      <nav className='flex grow justify-center'>
        <div className='mx-5'>
          <Link href="/users" className="hover:underline">Користувачі</Link>
        </div>
        <div className='mx-5'>
          <Link href="/posts" className="hover:underline">Публікації</Link>
        </div>
        <div className='mx-5'>
          <Link href="/about" className="hover:underline">Про компанію</Link>
        </div>
        <div className='mx-5'>
          <Link href="/contacts" className="hover:underline">Контакти</Link>
        </div>
      </nav>
      <div className='basis-32'></div>
  </header>
  )
}

export default Header
