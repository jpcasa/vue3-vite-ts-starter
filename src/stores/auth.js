import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null,
      token: null,
      error: null
    }
  },
  getters: {
    isAuthenticated: state => {
      return !!state.token && !!state.user
    },
    userId: state => {
      return state.user ? state.user.id : null
    }
  },
  actions: {
    setToken(token) {
      this.token = token
      window.localStorage.setItem('__fr__token', token)
    },
    setUser(user) {
      this.user = user
    },
    setError(error) {
      this.error = error
    },
  },
})
