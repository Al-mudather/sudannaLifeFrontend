<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueCrontab from 'vue-crontab'

VueCrontab.setOption({
  minutes: 2,
  auto_start: false
})

Vue.use(VueCrontab)

export default {
  name: 'App'
}
</script>
