<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            {{ keycloak.tokenParsed.preferred_username }}</v-col
          >
          <v-col cols="12"> {{ keycloak.token }}</v-col>
        </v-row>
        <v-row>
          <v-col><v-btn @click.stop="keycloak.logout()">Logout</v-btn></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  props: {
    keycloak: Object,
    authenticated: Object,
  },
  data: () => ({}),
};
</script>
