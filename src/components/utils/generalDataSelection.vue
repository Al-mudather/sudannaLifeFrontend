<template>
    <q-select
        v-model="model"
        :dark="darkMode"
        :filled="filled"
        :options="dataOptions"
        :label="selectionName"
        @input='inputValue'
    >
    </q-select>
</template>

<script>
import axios from 'axios'
import { API_URI } from 'src/utils/hostConfig'
import { mapState } from 'vuex'

export default {
  name: 'GeneralDataSelectionComponent',
  data () {
    return {
      model: null,
      dataOptions: [],
      allData: ''
    }
  },
  props: ['initData', 'point', 'selectionName', 'SelectionModel', 'darkMode', 'filled'],

  watch: {
    initData (val) {
      try {
        if (val) {
          if (val.ar_title) {
            this.model = { label: val.ar_title, value: val.id }
          }
        }
      } catch {
      }
    },
    SelectionModel (val) {
      this.model = val
    }
  },
  computed: {
    ...mapState('authentication', ['token'])
  },
  created () {
    // TODO: initialize the CarTypes selection
    // console.log('hhhhhhhhhhhhhhhhh')
    // console.log(this.token)
    // console.log('hhhhhhhhhhhhhhhhh')
    const headers = {
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    }
    axios
      .get(`${API_URI}${this.point}`, { headers: headers })
      .then(res => {
        console.log('ffffffffffffff')
        console.log(res.data)
        console.log('ffffffffffffff')
        const result = res.data.map(el => {
          return { label: el.node.ar_title, value: el.node.id }
        })
        this.dataOptions = result
        this.allData = res.data
      })
  },
  methods: {
    inputValue (data) {
      this.$emit('DataSelectionData', data)
    }
  }
}
</script>

<style>

</style>
