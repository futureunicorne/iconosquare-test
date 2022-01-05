import React, { useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from '../components/organisms/Header/Header'
import UserTable from '../components/organisms/UserTable/UserTable'

import { GetUserListService } from '../services/global'
import { useGlobal } from '../contexts/global'

function HomePage(props) {
  const { setUserList } = useGlobal()
  useEffect(() => {
    if (props?.userList) {
      setUserList(props?.userList ?? [])
    }
  }, [])
  return (
    <div className='relative w-screen h-screen bg-gray-50 flex flex-col'>
      <Head>
        <title> Iconosqaure app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto flex-1 py-12 mt-20'>
        <UserTable />
      </main>
    </div>
  )
}

HomePage.propTypes = {
  userList: PropTypes.array,
}

export const getServerSideProps = async () => {
  const userList = await GetUserListService()
  return {
    props: {
      userList: userList?.data ?? null,
    },
  }
}

export default HomePage
