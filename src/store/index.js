import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import speciality from 'src/store/speciality'
import authentication from 'src/store/authentication'
import VuePlyr from 'vue-plyr'
import VuePaginate from 'vue-paginate'

Vue.use(Vuex)
// Use global vue pagination component
Vue.use(VuePaginate)

// TODO: Custom video player
// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
  emit: ['ended']
})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      authentication,
      speciality
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
