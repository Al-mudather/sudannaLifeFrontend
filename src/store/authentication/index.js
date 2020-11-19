import { Notify, LocalStorage } from 'quasar'
import axios from 'axios'
import { API_URI } from 'src/utils/hostConfig'

const state = {
  user: LocalStorage.getItem('user') || null,
  token: LocalStorage.getItem('token') || null,
  loginPoint: '/auth/local',
  updateUserPoint: '/users'
}

const mutations = {
  updateUser (state, user) {
    state.user = user
  },
  updateToken (state, token) {
    state.token = token
  },
  deleteToken (state) {
    state.token = null
  }
}

const actions = {
  updateUserProfileAction ({ commit }, payload) {
    const headers = {
      Authorization: 'Bearer ' + state.token,
      'Content-Type': 'application/json'
    }

    const data = {
      username: payload.username ? payload.username : state.user.username,
      email: payload.email ? payload.email : state.user.email,
      full_name: payload.full_name ? payload.full_name : state.user.full_name,
      phone: payload.phone ? payload.phone : state.user.phone
    }

    return new Promise((resolve, reject) => {
      axios
        .put(`${API_URI}${state.updateUserPoint}/${state.user.id}`, data, { headers: headers }).then(response => {
          const user = response.data
          LocalStorage.set('user', user)
          commit('updateUser', user)
          Notify.create({
            type: 'positive',
            position: 'top',
            message: 'Data Saved successfully'
          })
        })
    })
  },

  loginAction ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URI}${state.loginPoint}`, {
          identifier: payload.identifier,
          password: payload.password
        })
        .then(response => {
          // Handle success.
          // console.log('Well done!')
          // console.log('User profile', response.data.user)
          // console.log('User token', response.data.jwt)
          const user = response.data.user
          const token = response.data.jwt
          // Set the user
          LocalStorage.set('user', user)
          // Set the token authentication
          LocalStorage.set('token', token)
          // commit the change to the store
          commit('updateUser', user)
          // update the token
          commit('updateToken', token)

          Notify.create({
            type: 'positive',
            position: 'top',
            message: 'logged in successfully'
          })

          resolve()
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response)
          Notify.create({
            type: 'negative',
            message: 'Invalid credentials'
          })
          reject(error.response)
        })
    })
  },

  logOutAction ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      // Todo clear everything from localStorage
      LocalStorage.clear()
      commit('deleteToken')
      Notify.create({
        type: 'positive',
        message: 'logged Out successfully'
      })
      resolve()
    })
  }
}

const getters = {
  user: state => state.user,
  token: state => state.token
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
