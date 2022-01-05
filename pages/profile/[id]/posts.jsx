import React, { useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from '../../../components/organisms/Header/Header'
import UserPosts from '../../../components/organisms/UserPosts/UserPosts'

import { GetUserPostService } from '../../../services/post'
import { useGlobal } from '../../../contexts/global'

function UserPostsPage(props) {
  const { userPosts } = props
  const { setUserPosts } = useGlobal()

  useEffect(() => {
    if (userPosts) {
      setUserPosts(userPosts ?? [])
    }
    userPosts
  }, [])
  return (
    <div className='relative w-screen h-screen bg-gray-50 flex flex-col'>
      <Head>
        <title> Iconosqaure post</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto flex-1 py-12 mt-20'>
        <UserPosts />
      </main>
    </div>
  )
}

UserPostsPage.propTypes = {
  userPosts: PropTypes.array,
}

export const getServerSideProps = async (ctx) => {
  const { query } = ctx
  if (!query.id) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    }
  }

  const userPosts = await GetUserPostService({ userId: query.id })
  return {
    props: {
      userPosts: userPosts?.data ?? null,
    },
  }
}

export default UserPostsPage
