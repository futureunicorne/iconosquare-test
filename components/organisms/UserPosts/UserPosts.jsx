import React, { useState } from 'react'

import Modal from '../../molecules/Modal/Modal'
import CreatePost from '../CreatePost/CreatePost'
import PostDetails from '../UserPostDetails/UserPostDetails'

import { useGlobal } from '../../../contexts/global'

function UserPosts() {
  const { userPosts, setUserPosts } = useGlobal()

  const [openCreate, setOpenCreate] = useState(false)
  const [open, setOpen] = useState(false)

  const [details, setDetails] = useState(null)

  const onOpenDetailsPost = (post) => {
    setDetails(post)
    setOpen(true)
  }

  const onOpenCreatePost = () => {
    setOpenCreate(true)
  }

  const onCloseDetailsPost = () => {
    setOpen(false)
    setDetails(null)
  }

  const onSubmitCreate = (data) => {
    const newList = [...userPosts]
    newList.unshift({
      ...data,
    })
    setUserPosts(newList)
    setOpenCreate(false)
  }
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div
          className='rounded-lg p-6 flex flex-col items-center justify-center shadow-sm border-2 border-dashed text-gray-500 cursor-pointer hover:bg-white'
          onClick={onOpenCreatePost}
        >
          <p>Create new post</p>
        </div>
        {userPosts &&
          userPosts?.map((postItem) => (
            <div
              key={postItem.id}
              onClick={() => onOpenDetailsPost(postItem)}
              className='bg-white rounded-lg p-6 shadow-sm flex justify-between flex-col cursor-pointer hover:shadow-md'
            >
              <h3 className='font-bold text-xl mb-4'>{postItem.title}</h3>
              <p className='text-gray-600'>{postItem.body}</p>
            </div>
          ))}
      </div>
      <Modal isOpen={open} onCloseModal={onCloseDetailsPost}>
        <PostDetails onCloseModal={onCloseDetailsPost} data={details} />
      </Modal>
      <Modal isOpen={openCreate} onCloseModal={() => setOpenCreate(false)}>
        <CreatePost onCloseModal={() => setOpenCreate(false)} onSubmitCreate={onSubmitCreate} />
      </Modal>
    </>
  )
}

export default UserPosts
