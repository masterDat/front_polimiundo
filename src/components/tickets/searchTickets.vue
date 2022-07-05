<template>
    <div>
        <v-layout align-center justify-center class="mt-10">
            <v-flex x12 sm8 md6 lg5 x14>
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>
                            Buscador
                        </v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-text-field outlined v-model="ciudadOrigen" label="Ciudad Origen"  prepend-icon="mdi-arrow-up-bold-box-outline"> </v-text-field>
                        <v-text-field outlined v-model="ciudadDestino" label="Ciudad Destino"  prepend-icon="mdi-arrow-down-bold-box-outline"> </v-text-field>
                        <v-menu v-model="fechaSalida" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field outlined v-model="date" label="Picker without buttons" prepend-icon="mdi-calendar"
                                    readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="fechaSalida = false"></v-date-picker>
                        </v-menu>

                        <v-menu  v-model="fechaLlegada" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field outlined v-model="date2" label="Picker without buttons" prepend-icon="mdi-calendar"
                                    readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" @input="fechaLlegada = false"></v-date-picker>
                        </v-menu>


                    </v-card-text>


                    <v-card-actions>
                        <v-flex>
                            <v-btn color="primary" @click="login">Buscar</v-btn>

                        </v-flex>
                    </v-card-actions>

                </v-card>
            </v-flex>

        </v-layout>
    </div>

</template>


<script>

export default {
    data() {
        return {
            ciudadOrigen: '',
            ciudadDestino: '',
            fechaSalida: '',
            fechaLlegada: '',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
        }
    }
}

</script>