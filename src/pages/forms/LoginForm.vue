<template>
  <q-page class="row justify-center">
    <div class="col-md-8 col-sm-12 col-xs-12 q-mt-xl q-pa-sm">
        <q-card class="my-card">
          <q-form @submit="onSubmit" @reset="onReset">
          <div class="text-center text-h4 q-pt-lg">Login in</div>
            <q-card-section>
              <q-input dense label="Email Or phone number" v-model="identifier"/>
              <q-input dense label="password" type="password" v-model="password" />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn outline type="reset" label="Cancel" color="negative" />
              <q-btn outline type="login" label="Submit" color="positive" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SupportiveIndividual',
  data () {
    return {
      identifier: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('authentication', ['loginAction']),
    onSubmit () {
      const redirectUrl = this.$route.query.redirect
      if (this.identifier === null) {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          position: 'top',
          icon: 'cloud_done',
          message: 'You need to provide an email or phone number in order to login'
        })
      } else {
        this.loginAction({ identifier: this.identifier, password: this.password })
          .then(res => {
            this.onReset()
            this.$router.push(redirectUrl || { name: 'user-management' })
          })
          .catch(error => {
            console.log(error)
          })
      }
    },

    onReset () {
      this.email = ''
      this.password = ''
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
