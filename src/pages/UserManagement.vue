<template>
  <q-page>
    <div class="row justify-center q-pa-md">
      <div class="col-6 col-md-6 col-sm-11 col-xs-11 q-gutter-y-md">
        <q-option-group
          v-model="panel"
          inline
          :options="[
            { label: 'User Profile', value: 'userProfile' },
            { label: 'Speciality', value: 'speciality' }
          ]"
        />

        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="userProfile">
            <div class="text-h6">User Profile</div>
            <user-profile />
          </q-tab-panel>

          <q-tab-panel name="speciality">
            <div class="text-h6">Speciality</div>
            <speciality />
          </q-tab-panel>

        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import userProfile from 'src/components/user/userProfile'
import speciality from 'src/components/speciality/speciality'

export default {
  name: 'UserManagement',
  data () {
    return {
      panel: 'userProfile'
    }
  },
  components: {
    userProfile,
    speciality
  }
}
</script>
