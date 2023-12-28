import Layout from '../components/layout'

export default function Contacts() {
  return (
    <Layout>
      <div className='my-12'>
        <section className='text-center mb-20'>
            <h1 className='mb-10 text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>Контакти</h1>
            <p className='mb-20 max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl'>Etiam porttitor, tortor non laoreet condimentum, diam.</p>
            <div className='flex justify-center '>
              <div className="basis-1/3 text-center px-5">
                <div className='flex justify-center mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                </div>
                <h3 className='mb-2 text-2xl text-gray-500'>Адреса</h3>
                <div className='text-base'>м.Харків вул. Шевченка 21</div>
              </div>
              <div className="basis-1/3 text-center px-5">
                <div className='flex justify-center mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                </div>
                <h3 className='mb-2 text-2xl text-gray-500'>Телефон</h3>
                <div className='text-base'>111 232 432 21</div>
              </div>
              <div className="basis-1/3 text-center px-5">
                <div className='flex justify-center mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className='mb-2 text-2xl text-gray-500'>Електронна пошта</h3>
                <div className='text-base'>business@info.com</div>
              </div>
            </div>
        </section>
      </div>
    </Layout>
  )
}