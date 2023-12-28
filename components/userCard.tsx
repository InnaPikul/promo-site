import User from "../interfaces/users"
import Image from "next/image";

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  console.log('user', user)
  return (
    <div className="flex mb-12">
      <div className="mr-5 flex">
        <Image
          src='/assets/blog/dynamic-routing/cover.jpg'
          width={200}
          height={100}
          alt="Cover picture 1"
        />
        <img 
          src='/assets/blog/dynamic-routing/cover.jpg' 
          width={200} 
          height={100} 
          className="ml-8" 
          alt="Cover picture 2"/>
      </div>
      <div>
        <div className="text-2xl">{user.name}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </div>
    </div>
  )
}

export default UserCard
