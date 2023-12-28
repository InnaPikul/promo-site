
import Layout from '../../components/layout'
import Post from '../../components/Post'
import PostType from '../../interfaces/post'

interface Props {
  posts: PostType[]
}

export default function PostPage({ posts }: Props) {
  return (
    <Layout>
      <div className='mt-12'>
          <section className='text-center mb-20'>
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>Публікації</h1>
          </section>
          <section>
            {posts.length > 0 ? posts.map(item => {
              return <Post key={item.id} post={item} />}) : null
            }
          </section>
        </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {


    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
   
    return { props: { posts } }
  }
