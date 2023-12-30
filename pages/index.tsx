import Image from 'next/image';
import Layout from '../components/layout';

const HomePage = () => {
  return (
    <Layout>
      <div>
        <section className='text-center mb-20'>
          <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>Lorem ipsum dolor sit amet</h1>
          <p className='mb-10 max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl'>Etiam porttitor, tortor non laoreet condimentum, diam sem facilisis dolor, eu viverra ipsum sem at nisi.</p>
          <Image
            src='https://placehold.co/1000x400.png'
            width={1000}
            height={400}
            alt="banner"
            className='mx-auto'
          />
        </section>
        <section className='mb-20'>
          <h2 className='text-4xl mb-10'>Переваги продукту</h2>
          <div className='flex flex-wrap -mx-2 sm:-mx-5'>
            <div className="basis-1/2 md:basis-1/4 text-center px-2 sm:px-5 mb-5">
              <div className='flex justify-center mb-2'>
                <Image
                  src='https://placehold.co/100x100.png'
                  width={100}
                  height={100}
                  alt="advantage1"
                />
              </div>
              <h3 className='mb-2 text-2xl'>Доступність</h3>
              <div className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, tortor non laoreet condimentum, diam sem facilisis dolor, eu viverra ipsum sem at nisi.</div>
            </div>
            <div className="basis-1/2 md:basis-1/4 text-center px-2 sm:px-5 mb-5">
              <div className='flex justify-center mb-2'>
                <Image
                  src='https://placehold.co/100x100.png'
                  width={100}
                  height={100}
                  alt="advantage1"
                />
              </div>
              <h3 className='mb-2 text-2xl'>Простота</h3>
              <div className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttito, diam sem facilisis dolor, eu viverra ipsum sem at nisi.</div>
            </div>
            <div className="basis-1/2 md:basis-1/4 text-center px-2 sm:px-5 mb-5">
              <div className='flex justify-center mb-2'>
                <Image
                  src='https://placehold.co/100x100.png'
                  width={100}
                  height={100}
                  alt="advantage1"
                />
              </div>
              <h3 className='mb-2 text-2xl'>Надійність</h3>
              <div className='text-base'>Lorem ipsum am porttitor, tortor non laoreet condimentum, diam sem facilisis dolor, eu viverra ipsum sem at nisi.</div>
            </div>
            <div className="basis-1/2 md:basis-1/4 text-center px-2 sm:px-5 mb-5">
              <div className='flex justify-center mb-2'>
                <Image
                  src='https://placehold.co/100x100.png'
                  width={100}
                  height={100}
                  alt="advantage1"
                />
              </div>
              <h3 className='mb-2 text-2xl'>Безпека</h3>
              <div className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, tortor non laoreet condimentum, diam sem facilisis dolor, eu viverra ipsum sem at nisi.</div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </Layout>
  );
};

export default HomePage;

