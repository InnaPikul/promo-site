import Container from '../../components/container'
import Layout from '../../components/layout'

type PostInfo = {
  title: string
  id: number
  body: string
}

type Props = {
  postInfo: PostInfo
}


export default function PostInfo({ postInfo }: Props) {
  console.log('postInfo', postInfo)
  return (
    <Layout>
      <div className='my-12'>
        <section className='text-center mb-20'>
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl capitalize'>{postInfo.title}</h1>
          </section>
        <div>
          <p className='capitalize'>{postInfo.body}</p>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;

    const postInfo = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
   
    return { props: { postInfo } }
  }
