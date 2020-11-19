<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="text-center">
          Sudanna
        </q-toolbar-title>

        <q-btn label="logOut" v-if="visible" color="negative" @click="lougOut" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import { LocalStorage } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      visible: !!LocalStorage.getItem('token')
    }
  },

  methods: {
    ...mapActions('authentication', ['logOutAction']),
    lougOut () {
      this.logOutAction()
        .then(res => {
          this.$router.push({ name: 'main' })
        })
    }
  }
}
</script>
