<template>
  <div>
    <q-form @submit="onSubmit">
    <div class="text-center text-h4 q-pt-lg">
      Hello, {{user.username}}
    </div>
      <q-card-section>
        <q-input dense label="Full Name" v-model="full_name" autofocus/>
        <q-input dense label="Email" type="email" v-model="email" />
        <q-input dense label="Phone Number" v-model="phone" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn outline type="submit" label="Save" color="positive" />
      </q-card-actions>
    </q-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'userProfile',
  data () {
    return {
      full_name: '',
      username: '',
      email: '',
      phone: ''
    }
  },

  created () {
    this.username = this.user.username
    this.phone = this.user.phone
    this.email = this.user.email
    this.full_name = this.user.full_name
  },

  computed: {
    ...mapState('authentication', ['user'])
  },

  methods: {
    ...mapActions('authentication', ['updateUserProfileAction']),
    onSubmit () {
      const payload = {
        username: this.username,
        email: this.email,
        full_name: this.full_name,
        phone: this.phone
      }

      this.updateUserProfileAction(payload)
        .then(res => {
          console.log('SSSSSSSSSSSSSSS')
          console.log(res)
          console.log('SSSSSSSSSSSSSSS')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">

</style>
