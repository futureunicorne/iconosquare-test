import axios from 'axios'

import { API_ENDPOINT } from '.'

export const GetUserListService = async () => {
  try {
    return await axios.get(`${API_ENDPOINT}/users`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  } catch (error) {
    return error?.response
  }
}
