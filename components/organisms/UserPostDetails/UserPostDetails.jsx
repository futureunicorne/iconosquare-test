import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { GetPostCommentsService } from '../../../services/post'

function UserPostDetails(props) {
  const { data } = props
  const [comments, setComments] = useState(null)

  useEffect(() => {
    if (data) fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const result = await GetPostCommentsService({ postId: data.id })
      setComments(result.data)
    } catch {
      props.onCloseModal()
    }
  }

  return (
    <div className='relative p-10 max-w-4xl max-h-96 w-full bg-white rounded-lg overflow-auto'>
      <h3 className='font-bold text-xl mb-4'>{data?.title ?? ''}</h3>
      <p className='text-gray-600'>{data?.body ?? ''}</p>
      <div className='mt-8'>
        <p className='mb-1 text-gray-700'>{`Comments (${comments?.length ?? 0})`}</p>
        <div className='w-full h-px bg-gray-200'></div>
        {comments &&
          comments.map((commentItem) => (
            <div className='mt-6' key={commentItem.id}>
              <h3 className='text-gray-900 font-bold'>{commentItem?.name ?? ''}</h3>
              <p className='text-gray-500 font-medium text-sm leading-4'>
                {commentItem?.body ?? ''}
              </p>
              <p className='text-gray-400 text-right mt-2'> {commentItem?.email ?? ''}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

UserPostDetails.propTypes = {
  data: PropTypes.any,
  onCloseModal: PropTypes.func,
}

export default UserPostDetails
