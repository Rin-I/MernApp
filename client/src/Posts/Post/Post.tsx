import React from "react"
import moment from "moment"
import * as Types from "../../Types"
import { useAppDispatch } from "../../app/hooks"
import { DeletePost } from "../../features/posts/postSlice"

type POST = {
  post: Types.POSTFETCHDATA
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Post: React.FC<POST> = ({ post, setCurrentId }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg overflow-hidden mb-10">
        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 className="text-left font-bold text-2xl">
            {post.creator}
            <span className="ml-5">#{post.tags}</span>
            <span className="ml-6 text-base text-gray-700">
              {moment(post.createdAt).fromNow()}
            </span>
          </h3>
          <p className="text-5xl text-body-color leading-relaxed mb-7">
            <span className="text-3xl">{post.title}:</span>¥{post.message}
          </p>
          <a
            href="#"
            className="
             inline-block
             py-2
             px-7
             border border-[#E5E7EB]
             rounded-full
             text-base text-body-color
             font-medium
             hover:border-primary hover:bg-primary hover:text-white
             transition
             "
          >
            詳細 ※未実装
          </a>
          <button
            className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
            onClick={() => setCurrentId(post._id)}
          >
            編集する
          </button>
          <div
            className="flex justify-end"
            onClick={() => dispatch(DeletePost(post._id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
