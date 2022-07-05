<template>
  <v-app>
    <v-app-bar app color="primary" dark>


      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <v-container>

        <v-layout row>
          <v-flex md7>
            <searchTickets />
          </v-flex>
 <v-spacer></v-spacer>



          <v-flex md4>
            <showTickets />
          </v-flex>
        </v-layout>

      </v-container>








    </v-main>
  </v-app>
</template>

<script>
import searchTickets from './components/tickets/searchTickets';
import showTickets from './components/tickets/showTickets';

export default {
  name: 'App',

  components: {
    searchTickets,
    showTickets,
  },

  data: () => ({
    //
  }),
};
</script>
