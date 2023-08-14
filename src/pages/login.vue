<script setup>
const isPasswordVisible = ref(false)

</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div class="d-flex text-primary" v-html="logo" />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          {{ appName }}
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Welcome to {{ appName }}! 👋🏿
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login()">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField v-model="form.email" autofocus placeholder="johndoe@email.com" label="Email" type="email" />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField v-model="form.password" label="Password" placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible" />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox v-model="form.remember" label="Remember me" />

                <RouterLink class="text-primary ms-2 mb-1" to="javascript:void(0)">
                  Forgot Password?
                </RouterLink>
              </div>

              <!-- login button -->
              <VBtn block type="submit">
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol cols="12" class="text-center text-base">
              <span>New on our platform?</span>
              <RouterLink class="text-primary ms-2" to="/register">
                Create an account
              </RouterLink>
            </VCol>

            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol cols="12" class="text-center">
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>
<script>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue';
import logo from '@images/logo.svg?raw';

const form = ref({
  email: '',
  password: '',
  remember: false,
})

import api from '@/api/RestClient';
// import { helper } from '@/helpers'

export default {
  name: 'SignIn1',
  data() {
    return {
      spinner: false,
      form: form,
      errors: {}
    }
  },
  computed: {
    // ...mapGetters({
    //   isLogin: 'Auth/loggedIn',
    //   currentUser: 'Auth/user',
    //   currentToken: 'Auth/token'
    // }),
    appName() {
      return import.meta.env.VITE_APP_NAME
    },
  },
  created() {
    // if (!this.isLogin) {
    //     this.$store.dispatch('Auth/resetUser', false);
    // }
  },
  methods: {
    login() {
      this.spinner = true;
      console.log('Check and continue', this.form);

      console.log(this.checkLoginForm(), this.errors);


      // If Success
      // TODO save token to store
      if (this.checkLoginForm()) {

        api.auth.login(this.form.email, this.form.password)
          .then(response => {
            console.log('data', response, response.data)
          })


        // api.auth.login(this.email, this.password)
        //   .then(data => {
        //     console.log('data', data)

        //   })
        //   .catch(err => {
        //     // this.message = this.formatErrorResponse(err);
        //     // this.alert = true;
        //     console.log(this.formatErrorResponse(err))
        //   })
        //   .finally(() => {
        //     this.spinner = false;
        //     setTimeout(() => {
        //       this.alert = false;
        //     }, 3000);
        //   })

        // ************************************************************************//

        // localStorage.setItem('jwt', JSON.stringify({ email: this.form.email, name: '' }));

        // TODO save token to store
        // this.$router.push('/');
      }
      // Else 
      // Display login errors
    },
    formatErrorResponse(errors) {
      if (errors.response) {
        errors = errors.response.data.message
      } else if (errors.request) {
        errors = errors.request
      } else {
        errors = errors.message;
      }
      return errors
    },
    checkLoginForm() {

      if (!this.form.email || this.form.email.trim() == '') {
        this.errors.email = 'Please enter Email';
      }
      if (!this.form.password || this.form.password.trim() == '') {
        this.errors.email = 'Please enter Email';
      }

      return true;
    }
  }
}
</script>
<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
