import Layout from '../components/layout'
import UserCard from '../components/userCard'


export default function Users({users}) {
  return (
    <Layout>
        <div className='mt-12'>
          <section className='text-center mb-20'>
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>Користувачі</h1>
          </section>
          <section>
            {users.length > 0 ? users.map(item => {
              return <UserCard key={item.id} user={item} />}) : null
            }
          </section>
        </div>
    </Layout>
  )
}

export async function getServerSideProps() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
   
    return { props: { users } }
  }
