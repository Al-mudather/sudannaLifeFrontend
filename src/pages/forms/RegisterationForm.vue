<template>
  <q-page class="row justify-center">
    <div class="col-md-8 col-sm-12 col-xs-12 q-mt-xl q-pa-sm">
        <q-card class="my-card">
          <q-form @submit="onSubmit" @reset="onReset">
          <div class="text-center text-h4 q-pt-lg">Registeration</div>
            <q-card-section>
              <q-input dense label="User Name" v-model="username" autofocus/>
              <q-input dense label="Email" type="email" v-model="email" />
              <q-input dense label="Phone Number" v-model="phone" />
              <q-input dense label="Password" type="password" v-model="password" />
              <q-input dense label="Repeate Password" type="password" v-model="repPassword" />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat type="reset" label="Cancel" color="negative" />
              <q-btn flat type="submit" label="Register" color="positive" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import { API_URI } from 'src/utils/hostConfig'

export default {
  name: 'SupportiveIndividual',
  data () {
    return {
      username: '',
      email: '',
      phone: '',
      password: '',
      proxy: 'https://cors-anywhere.herokuapp.com/',
      repPassword: '',
      point: '/auth/local/register'
    }
  },
  methods: {
    onSubmit () {
      if (this.username === null) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'warning',
          message: 'What is your name?'
        })
      } else {
        if (this.password === this.repPassword) {
          // TODO: make the registeration call
          axios
            .post(`${API_URI}${this.point}`, {
              username: this.username,
              email: this.email,
              phone: this.phone,
              password: this.password
            })
            .then(response => {
              // Handle success.
              console.log('Well done!')
              console.log('User profile', response.data.user)
              console.log('User token', response.data.jwt)
              this.onReset()
              this.$q.notify({
                color: 'green-4',
                textColor: 'white',
                position: 'top',
                icon: 'cloud_done',
                message: 'Submitted'
              })
            })
            .catch(error => {
              // Handle error.
              console.log('An error occurred:', error.response)
            })
        } else {
          this.$q.notify({
            color: 'green-4',
            textColor: 'negative',
            position: 'top',
            icon: 'cloud_done',
            message: 'passowrd must be matshed'
          })
        }
      }
    },

    onReset () {
      this.username = ''
      this.email = ''
      this.phone = ''
      this.password = ''
      this.repPassword = ''
    }
  }
}
</script>
<style lang="scss">
.q-field__control {
  color: $tealBlue !important;
}
.my-card {
  color: $tealBlue !important;
}
.individualCard {
  background-color: $tealWhite;
}
</style>
