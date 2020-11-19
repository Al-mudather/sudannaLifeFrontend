<template>
  <q-page class="row justify-center">
    <div class="col-md-8 col-sm-12 col-xs-12 q-mt-xl q-pa-sm">
        <q-card class="my-card">
          <q-form @submit="onSubmit" @reset="onReset">
          <div class="text-center text-h4 q-pt-lg">Registration of support individuals</div>
            <q-card-section>
              <q-input dense label="Name" v-model="name" autofocus/>
              <q-input dense label="Email" type="email" v-model="email" />
              <q-input dense label="Communication number" v-model="phone" />

              <q-select v-model="supportType" :options="supportTypeOptions" label="How you would like to support?" />
              <q-select v-model="banktype" :options="banktypeOptions" label="Finintial support" />
              <q-select v-model="equipmentType" :options="equipmentTypeOptions" label="Equipment Type" />
              <q-input dense label="How these equipments can help?" v-model="equipmentQuestion"/>
              <q-select v-model="scientificSupportType" :options="scientificSupportTypeOptions" label="Scientific Support" />

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
      name: '',
      email: '',
      phone: '',
      supportType: '',
      supportTypeOptions: ['Contribute a sum of money', 'Donate equipment'],
      banktype: '',
      banktypeOptions: [
        'Bank of khartoum',
        'Tadhamon Bank',
        'Faisal Islamic Bank',
        'Farmer Bank',
        'bank alkhalij',
        'Omdurman National Bank',
        'Sudanese French Bank'
      ],
      equipmentType: '',
      equipmentTypeOptions: [
        'Agricultural equipment',
        'Building, housing and services',
        'Water connection',
        'Farmer Bank',
        'Security, safety and oversight',
        'Entertainment',
        'Manufacturing industries',
        'Storage'
      ],
      equipmentQuestion: '',
      scientificSupportType: '',
      scientificSupportTypeOptions: [
        'Scientific support',
        'Scientific paper',
        'Search',
        'Book',
        'Scientific courses'
      ]
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
      this.email = ''
      this.phone = ''
      this.supportType = ''
      this.banktype = ''
      this.equipmentType = ''
      this.equipmentQuestion = ''
      this.scientificSupportType = ''
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
