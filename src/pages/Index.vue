<template>
  <q-page>
    <div class="q-mt-xl row justify-center items-start">
      <div class="col-5 col-md-5 col-sm-11 col-xs-11">
        <q-card class="my-card">
          <q-card-section class="text-center">
            <div class="text-h5">Login using phone number</div>
            <div class="text-h5">Or using email number</div>
            <div class="text-h5">Or Register a new account</div>
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn color="orange" outline label="Phone Login"  @click="phoneLogin" />
            <q-btn color="primary" outline label="Email Login"  @click="emailLogin" />
            <q-btn color="info" outline label="Register"  @click="registerNewAccount" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    phoneLogin () {
      this.$router.push({ name: 'phone-login' })
    },

    emailLogin () {
      this.$router.push({ name: 'email-login' })
    },

    registerNewAccount () {
      this.$router.push({ name: 'registeration' })
    }
  }
}
</script>
