import React from "react"
import Post from "./Post/Post"
import { useAppSelector } from "../app/hooks"

type PROPS = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Posts: React.FC<PROPS> = ({ setCurrentId }) => {
  const posts = useAppSelector((store) => store.posts)

  return !posts.length ? (
    <div className="flex justify-center my-20">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full"></div>
    </div>
  ) : (
    <div className="flex flex-wrap mx-2">
      {posts.map((post) => (
        <div key={post._id} className="w-1/2 px-2">
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  )
}

export default Posts
