<template>
  <q-page class="row justify-center">
    <div class="col-md-8 col-sm-12 col-xs-12 q-mt-xl q-pa-sm">
        <q-card class="my-card">
          <q-form @submit="onSubmit" @reset="onReset">
          <div class="text-center text-h4 q-pt-lg">Registration of supportive Side</div>
            <q-card-section>
              <q-input dense label="Name" v-model="name" autofocus/>
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat type="reset" label="Cancel" color="negative" />
              <q-btn flat type="submit" label="Submit" color="positive" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'SupportiveIndividual',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.name === null) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'warning',
          message: 'You need to write the name'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          position: 'top',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = ''
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
