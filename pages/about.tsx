
import Layout from '../components/layout'
import Image from 'next/image';

type Props = {
  data: string
}

export default function About({ data }: Props) {
  return (
    <Layout>
      <div className='my-12'>
        <section className='text-center mb-20'>
          <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>Про компанію</h1>
        </section>
        <section className='flex'>
          <div className='basis-5/12'>
            <Image
                src='https://placehold.co/500x600.png'
                width={500}
                height={600}
                alt="about company"
              />
          </div>
          <div className='basis-7/12'>
            <h2 className='my-12 text-6xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>Наша історія</h2>
            <p className='mb-10 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className='text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl ml-16'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no laborum.</p>

          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  return {
    props: {
      data,
    },
  };
}
