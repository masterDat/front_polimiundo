<template>

    <div class='mt-5'>
        <v-container>
            <v-flex md12>
                <v-card class="mx-auto" max-width="344" v-for="item in data" :key="item.Precio">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/plane.jpg" height="200px"></v-img>

                    <v-card-title>
                        Datos de Tickets aereos
                    </v-card-title>

                    <v-card-subtitle>
                        Las mejores opciones del mercado
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>{{ show ? 'mdi-airplane' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                <div><b>Aerolinea : </b> {{ item.Aerolinea }}</div>
                                <div><b>Precio : $</b> {{ item.Precio }}</div>
                                <div><b># Escalas :</b> {{ item.Escalas }}</div>
                                <div><b>Duracion Vuelo : </b>{{ item.Duracion }}</div>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-container>


        <br />
    </div>

</template>

<script>
export default {
    data() {
        return {
            data: [],
            show: true,
        }
    },

    mounted() {
        this.data = this.$store.state.data;
        console.log(this.data)
    }


}
</script>