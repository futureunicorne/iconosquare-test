import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'

import * as Yup from 'yup'

const ErrorMessage = ({ message }) => {
  return (
    <div className='mt-1'>
      <p className=' text-red-500'>{`* ${message}`}</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

function CreatePost(props) {
  const { onSubmitCreate } = props

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title field required '),
    body: Yup.string().required('Content field required'),
  })

  const {
    handleSubmit,
    register,
    clearErrors,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  })

  const handleSubmitCreate = async (inputData) => {
    clearErrors()
    onSubmitCreate(inputData)
    reset({ title: '', body: '' })
  }

  return (
    <div className='relative p-10 max-w-2xl h-auto w-full max-h-full bg-white rounded-lg overflow-auto'>
      <h2 className='text-2xl text-center mb-6'>Create new post</h2>
      <form onSubmit={handleSubmit(handleSubmitCreate)} id='create'>
        <div className='mb-6'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            name='title'
            className='appearance-none mt-1 rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            {...register('title')}
          />
          {!!errors.title && <ErrorMessage message={errors.title.message} />}
        </div>
        <div className='mb-6'>
          <label htmlFor='title'>Content</label>
          <textarea
            id='body'
            name='body'
            {...register('body')}
            className='appearance-none mt-1 rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          />
          {!!errors.body && <ErrorMessage message={errors.body.message} />}
        </div>
        <div className='mt-8'>
          <button
            type='submit'
            disabled={!isValid}
            className='group cursor-pointer relative w-full flex justify-center py-3 px-4 border border-transparent text-sm disabled:opacity-30 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

CreatePost.propTypes = {
  onSubmitCreate: PropTypes.func,
}

export default CreatePost
