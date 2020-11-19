import { Notify, LocalStorage } from 'quasar'
import axios from 'axios'
import { API_URI } from 'src/utils/hostConfig'

const state = {
  ar_name: '',
  en_name: '',
  ar_description: '',
  en_description: '',
  specialityEndpoint: '/specialities'

}

const mutations = {
  setSpeciality (state, data) {
    state.ar_name = data.ar_name
    state.en_name = data.en_name
    state.ar_description = data.ar_description
    state.en_description = data.en_description
  }

}

const actions = {

  createSpecialityAction ({ commit }, payload) {
    const headers = {
      Authorization: 'Bearer ' + LocalStorage.getItem('token'),
      'Content-Type': 'application/json'
    }

    const data = {
      ar_name: payload.ar_name ? payload.ar_name : state.ar_name,
      en_name: payload.en_name ? payload.en_name : state.en_name,
      ar_description: payload.ar_description ? payload.ar_description : state.ar_description,
      en_description: payload.en_description ? payload.en_description : state.en_description,
      manager_id: payload.manager_id ? payload.manager_id : state.manager_id
    }

    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URI}${state.specialityEndpoint}`, data, { headers: headers }).then(response => {
          const data = response.data

          commit('setSpeciality', data)
          Notify.create({
            type: 'positive',
            position: 'top',
            message: 'Data Saved successfully'
          })
        })
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
