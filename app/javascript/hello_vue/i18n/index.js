import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    items: {
      title: 'Items'
    }
  },

  ru: {
    items: {
      title: 'Список'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages
})

export default i18n