import React from 'react'
import PropTypes from 'prop-types'

import { GlobalContextProvider } from '../contexts/global'

import '../styles/globals.css'

const IconosquareApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  )
}

IconosquareApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default IconosquareApp
