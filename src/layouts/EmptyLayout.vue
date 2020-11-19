<template>
  <q-layout view="lHh Lpr lFf" class="mainContainer">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'EmptyLayout',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
// .mainContainer {
//   background-color: $tealPrimary;
// }
</style>
