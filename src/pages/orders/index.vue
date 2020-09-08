<template>
    <OrdersListPage />
</template>

<script>
import axios from "axios";
import OrderListTable from './../../components/Tables/OrderListTable.vue'
export default {
    name: 'OrdersListPage',
    data(){},
    components: {
      OrderListTable
    }
}

</script>