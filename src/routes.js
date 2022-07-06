// routes.js

import searchTickets from './components/tickets/searchTickets.vue';

import showTickets from './components/tickets/showTickets.vue';


const routes = [
    
    { path: '/search', component: searchTickets },
    { path: '/show', component: showTickets },
];

export default routes;