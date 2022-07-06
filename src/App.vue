<template>
  <v-app>
    <v-app-bar app color="primary" dark>


      <v-spacer></v-spacer>

     
        <span class="mr-2">Pasajes Aereos Beta</span>
        <v-icon>mdi-open-in-new</v-icon>
      
    </v-app-bar>
    <v-main>

      <v-treeview dense activatable item-key="name" return-object @update:active="goRoute" open-on-click :items="items">
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>

 <v-container>
      <v-layout row align-center justify-center>
        <v-flex md7>
          <router-view></router-view>

        </v-flex>
      </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import searchTickets from './components/tickets/searchTickets';
//import showTickets from './components/tickets/showTickets';

export default {
  name: 'App',

  components: {
    //searchTickets,
    //showTickets,
  },

  data: () => ({
    items: [
      {
        id: 1,
        name: 'Tickets',
        children: [
          { id: 2, name: 'Buscador', route: "/search" },
          { id: 3, name: 'Resultados', route: "/show" },

        ],
      },

    ],
  }),


  methods: {
    goRoute(e) {
      if (e.length > 0) {
        if (this.route != e[0].name) {
          this.$store.state.title_main = e[0].name;
          this.$router.push(e[0].route);
          this.route = e[0].name;
        }
      }
    },
    initiallyOpen(e) {
      console.log(e);
    },
  }
}

</script>
