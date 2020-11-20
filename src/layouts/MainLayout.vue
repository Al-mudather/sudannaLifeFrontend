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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      visible: false
    }
  },

  watch: {
    token (val) {
      if (val) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  },

  computed: {
    ...mapState('authentication', ['token'])
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
