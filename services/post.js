import axios from 'axios'
import { API_ENDPOINT } from '.'

export const GetUserPostService = async (params) => {
  try {
    return await axios.get(`${API_ENDPOINT}/posts?userId=${params.userId}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  } catch (error) {
    return error?.response
  }
}

export const GetPostCommentsService = async (params) => {
  try {
    return await axios.get(`${API_ENDPOINT}/comments?postId=${params.postId}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  } catch (error) {
    return error?.response
  }
}
