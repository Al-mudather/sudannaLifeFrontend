<template>
  <div>
    <q-form @submit="onSubmit">
      <q-card-section>
        <q-input dense label="Arabic Name" v-model="ar_name_input" autofocus/>
        <q-input dense label="English Name" v-model="en_name_input"/>

        <div class="q-pa-md q-gutter-sm">
          <div class="text-h6">Arabic description</div>
          <q-editor
            v-model="ar_description_input"
            :toolbar="[
              ['bold', 'italic', 'underline'],
              [{
                label: $q.lang.editor.formatting,
                icon: $q.iconSet.editor.formatting,
                list: 'no-icons',
                options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
              }]
            ]"
          />
        </div>

        <div class="q-pa-md q-gutter-sm">
          <div class="text-h6">English description</div>
          <q-editor
            v-model="en_description_input"
            :toolbar="[
              ['bold', 'italic', 'underline'],
              [{
                label: $q.lang.editor.formatting,
                icon: $q.iconSet.editor.formatting,
                list: 'no-icons',
                options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
              }]
            ]"
          />
        </div>
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
  name: 'Speciality',
  data () {
    return {
      ar_name_input: '',
      en_name_input: '',
      ar_description_input: null,
      en_description_input: null
    }
  },

  computed: {
    ...mapState('authentication', ['user'])
  },

  methods: {
    ...mapActions('speciality', ['createSpecialityAction']),
    onSubmit () {
      const data = {
        ar_name: this.ar_name_input,
        en_name: this.en_name_input,
        ar_description: this.ar_description_input,
        en_description: this.en_description_input,
        manager_id: this.user.id
      }

      this.createSpecialityAction(data)
    }
  }
}
</script>

<style lang="scss">

</style>
