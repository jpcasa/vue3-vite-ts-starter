import axios from 'axios'

/*
  Set up basic configuration for axios.
*/
export function setupApi() {
  const baseURL = `${import.meta.env.VITE_API_URL}`
  const apiOptions = { headers: {}}
  const token = window.localStorage.getItem('__fr__token')

  // Set token if one exists
  if (token) apiOptions.headers.Authorization = `bearer ${token}`

  // Create axios instance
  const axiosClient = axios.create({ baseURL, ...apiOptions })

  return { axiosClient, token }
}

/*
  AUTH API
*/
export function useAuthApi() {
  const loading = ref(false)

  const { axiosClient } = setupApi()

  // GET ME
  const getMe = () => axiosClient.get(`/users/me`)
  
  return { loading, getMe }
}