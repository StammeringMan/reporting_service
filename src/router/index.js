import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../pages/HomePage.vue';
import OrderListTable from './../components/Tables/OrderListTable.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: HomePage},
        {path: '/orders', component: OrderListTable}

    ]
})