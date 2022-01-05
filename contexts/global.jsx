import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext(null)

export function useGlobal() {
  return useContext(GlobalContext)
}

export const initialContext = {
  userList: null,
  userPosts: null,
  filteredUserList: [],
  setUserList: () => {
    return
  },
  setUserPosts: () => {
    return
  },
  setFilteredUserList: () => {
    return
  },
}

export const GlobalContextProvider = (props) => {
  const { children } = props

  const [userList, setUserList] = useState(initialContext.userList)
  const [userPosts, setUserPosts] = useState(initialContext.userPosts)
  const [filteredUserList, setFilteredUserList] = useState(initialContext.filteredUserList)

  return (
    <GlobalContext.Provider
      value={{
        userList,
        userPosts,
        filteredUserList,
        setUserList,
        setUserPosts,
        setFilteredUserList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node,
}
