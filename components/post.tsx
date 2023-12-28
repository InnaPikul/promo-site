import Link from "next/link";
import PostType from "../interfaces/post";

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => {
  return (
    <div className="flex mb-12">
      <div>
        <div className="text-2xl">
          <Link href={`/posts/${post.id}`} className="capitalize">
            {post.title}
          </Link>
        </div>
        <p className="capitalize">{post.body}</p>
      </div>
    </div>
  )
}

export default Post
