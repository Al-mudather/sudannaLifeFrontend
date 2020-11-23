/* eslint-disable new-cap */
<template>
  <q-page class="row justify-center">
    <div class="col-md-8 col-sm-12 col-xs-12 q-mt-xl q-pa-sm">
        <q-card class="my-card">
          <q-form @submit="onSubmit" @reset="onReset">
          <div class="text-center text-h4 q-pt-lg">Create New Contest</div>
            <q-card-section>
              <general-data-selection
                point="/categories"
                selectionName="Category"
                :SelectionModel="category"
                filled="filled"
                v-on:DataSelectionData="CategorySelectionDataGandler"
              />
              <q-input dense label="Arabic Title" v-model="ar_title"/>
              <q-input dense label="English Title" v-model="en_title" />
              <general-text-editor
                Editorlabel="Arabic Description"
                :editorModel="ar_description"
                v-on:TextEditorValue="ArabicDescriptionValueHandler"
              />
              <general-text-editor
                Editorlabel="English Description"
                :editorModel="en_description"
                v-on:TextEditorValue="EnglishDescriptionValueHandler"
              />

              <q-datetime-picker v-model="model" type="datetime" />

              <div class="row q-gutter-md justify-center">
                <div class="q-mt-md col-5 col-md-5 col-sm-5 col-xs-11">
                  <div class="text-h6">Started at</div>
                  <q-date v-model="start_at" />
                </div>
                <div class="q-mt-md col-5 col-md-5 col-sm-5 col-xs-11">
                  <div class="text-h6">End at</div>
                  <q-date v-model="end_at"/>
                </div>
              </div>

            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn outline type="reset" label="Cancel" color="negative" />
              <q-btn outline type="submit" label="Create" color="positive" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import { API_URI } from 'src/utils/hostConfig'
import generalDataSelection from 'src/components/utils/generalDataSelection'
import generalTextEditor from 'src/components/utils/generalTextEditor'
import moment from 'moment'

export default {
  name: 'SupportiveIndividual',
  data () {
    return {
      category: '',
      categorySelection: '',
      ar_title: '',
      en_title: '',
      ar_description: '',
      en_description: '',
      start_at: moment().format('YYYY/MM/DD'),
      end_at: moment().format('YYYY/MM/DD'),
      model: moment().format('YYYY/MM/DD'),
      created_by: '',
      updated_by: '',
      proxy: 'https://cors-anywhere.herokuapp.com/',
      contestPoint: '/contests'
    }
  },

  components: {
    'general-data-selection': generalDataSelection,
    'general-text-editor': generalTextEditor
  },

  methods: {
    CategorySelectionDataGandler (data) {
      this.categorySelection = data
    },

    ArabicDescriptionValueHandler (val) {
      this.ar_description = val
    },

    EnglishDescriptionValueHandler (val) {
      this.en_description = val
    },

    onSubmit () {
      if (this.username === null) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'warning',
          message: 'What is your name?'
        })
      } else {
        if (this.password === this.repPassword) {
          // TODO: make the registeration call
          axios
            .post(`${API_URI}${this.point}`, {
              username: this.username,
              email: this.email,
              phone: this.phone,
              password: this.password
            })
            .then(response => {
              // Handle success.
              console.log('Well done!')
              console.log('User profile', response.data.user)
              console.log('User token', response.data.jwt)
              this.onReset()
              this.$q.notify({
                color: 'green-4',
                textColor: 'white',
                position: 'top',
                icon: 'cloud_done',
                message: 'Submitted'
              })
            })
            .catch(error => {
              // Handle error.
              console.log('An error occurred:', error.response)
            })
        } else {
          this.$q.notify({
            color: 'green-4',
            textColor: 'negative',
            position: 'top',
            icon: 'cloud_done',
            message: 'passowrd must be matshed'
          })
        }
      }
    },

    onReset () {
      this.username = ''
      this.email = ''
      this.phone = ''
      this.password = ''
      this.repPassword = ''
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
