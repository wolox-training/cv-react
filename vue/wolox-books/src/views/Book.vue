<template lang="pug">
  .book-container
    .navbar-container
      .icon-container
        img.wolox-icon-small(src='../assets/wolox_logo.svg' alt='Wolox logo')
        p.icon-title
          | {{ $t('app.title') }}
      button.logout(@click='logout()')
        | {{ $t('app.logout') }}
    transition(appear name='show')
      .detail-container
        img.detail-cover(:src='selectedBook.image_url' :alt='selectedBook.title')
        .detail-book
          .book-title-genre
            h1.title
              | {{ selectedBook.title }}
            span.genre
              | ({{ selectedBook.genre }})
          .other-details
            .detail(v-for='detail of detailsBook')
              h4.item
                | {{ detail.value }}:
              span.value
                | {{ selectedBook[detail.name] }}
</template>

<script>
import { mapState } from 'vuex'
import { removeToken } from '@/services/LocalStorageService'
import store from '@/store'
import routes from '@/routes'

import { detailsBook } from './constants'

export default {
  name: 'details-book',
  store,
  computed: mapState({
    selectedBook: state => state.selectedBook
  }),
  props: {
    routes: {
      type: Object,
      default: () => routes
    },
    detailsBook: {
      type: Array,
      default: () => detailsBook
    }
  },
  methods: {
    logout () {
      removeToken()
      this.$router.push(routes.login)
    }
  },
  created () {
    this.$store.dispatch('getBookById', this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/colors';
@import 'src/scss/fonts';
@import 'src/scss/commons/images';
@import 'src/scss/commons/book';
@import 'src/scss/commons/navbar';

.show-enter-active {
  transition: all 1.5s ease;
}

.show-enter, .show-leave-to {
  transform: translateX(-100px) scale(0.7);
  opacity: 0;
}

.book-container {
  background-color: $wild-sand;
  height: 100vh;
  width: 100%;
}

.detail-container {
  background-color: $white;
  height: 100%;
  margin: 40px auto;
  max-height: 350px;
  max-width: 900px;
  padding: 40px 20px;
  widows: 100%;
}

.detail-container {
  display: flex;
}

.detail-cover {
  flex-grow: 0.2;
  height: 100%;
  max-height: 300px;
  max-width: 280px;
  width: 100%;
}

.detail-book {
  display: flex;
  flex-direction: column;
  flex-grow: 0.8;
  justify-content: baseline;
  margin-left: 20px;
}

.book-title-genre {
  align-items: center;
  border-bottom: 4px solid $atlantis;
  display: flex;
  margin-bottom: 20px;
  padding: 10px 0;
  width: 100%;
}

.title {
  color: $black;
  font-size: $detail-title;
  font-weight: 400px;
  line-height: 1;
}

.genre {
  font-size: $detail-genre;
  line-height: 1;
  padding-left: 10px;
}

.other-details {
  display: flex;
  flex-direction: column;
}

.item {
  color: $black;
  font-size: 16px;
  font-weight: 400px;
  margin-bottom: 10px;
}

.value {
  padding-left: 10px;
}
</style>
