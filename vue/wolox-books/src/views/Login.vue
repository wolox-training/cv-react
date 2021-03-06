<template lang="pug">
  .base-layout-container
    img.wolox-image(alt='Wolox logo' src='../assets/wolox_logo.svg')
    form.base-form-container(@submit.prevent="onSubmit()")
      p.base-form-title
        | {{ $t('app.title') }}
      .input-text-container(
        v-for='(field, index) in fields'
        :class='{ "input-text-error" : $v.login[field.name].$error }'
        :key='index')
          label.input-text-label(:for='field.name')
            | {{ field.label }}
          input.input-text-content(:id='field.name' v-model='login[field.name]' )
          p.field-error(v-show='$v.login[field.name].$error')
            | {{ showError($v.login[field.name]) }}
      p.field-error(v-show='error')
        | {{ error }}
      button.base-form-button(:style='{"--bgButton": bgButton,"--colorTextButton": colorTextButton}')
        | {{ $t('app.signIn') }}
    .container-button
      router-link.base-form-button.link-form(:to='routes.sign_up')
        | {{ $t('app.signUp') }}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

import { getError } from '@/utils/generalFunctions'
import AuthService from '@/services/AuthService'
import { setToken } from '@/services/LocalStorageService'

import { loginFieldsArray } from './constants'
import routes from '../routes'

export default {
  name: 'login',
  props: {
    fields: {
      type: Array,
      default: () => loginFieldsArray
    },
    routes: {
      type: Object,
      default: () => routes
    },
    bgButton: {
      type: String,
      default: '#EE0034'
    },
    colorTextButton: {
      type: String,
      default: '#00ADEE'
    }
  },
  computed: {
    btnColor () {
      return {
        '--bgButton': this.bgButton,
        '--colorTextButton': this.colorTextButton
      }
    }
  },
  data () {
    return {
      login: {},
      error: ''
    }
  },
  validations: {
    login: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    showError (vueInst) {
      return getError(vueInst)
    },
    onSubmit () {
      this.$v.login.$touch()
      if (!this.$v.login.$error) {
        const loginData = { session: { ...this.login } }
        AuthService.login(loginData)
          .then(response => {
            if (response.ok) {
              setToken(response.data.access_token)
              this.$router.push(routes.home)
            } else {
              this.error = response.data.error
            }
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/commons/form';
@import 'src/scss/commons/images';
@import 'src/scss/commons/input_label_error';
@import 'src/scss/commons/links';

.container-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
