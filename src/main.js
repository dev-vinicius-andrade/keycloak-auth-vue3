import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Keycloak from 'keycloak-js'

async function main() {
  try {
    const keycloakOptions = {  
      url:import.meta.env.VITE_APP_AUTH_URL,
      realm:import.meta.env.VITE_APP_AUTH_REALM,
      clientId:import.meta.env.VITE_APP_AUTH_CLIENT_ID,
      onLoad: 'login-required'
    }
    const keycloak = new Keycloak(keycloakOptions)
    keycloak.init({ onLoad: keycloakOptions.onLoad }).then((authenticated) => {
      loadFonts()
      const app =  createApp(App, { keycloak, authenticated })
      app.use(vuetify)
      app.mount('#app')
    }).catch(() => {})
  } catch (error) {
    console.log('error', error)
  }
}
main()
