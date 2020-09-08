<template>
         <v-row v-if="orders.length"
         class="ma-2">
            <v-col cols="12">
                <v-data-table
            :headers="headers"
            :items="orders"
            sort-by="-createdAt"
            class="elevation-1"
            >
            <template v-slot:top>
                <v-toolbar flat color="white">
                <v-toolbar-title>Order List</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-spacer></v-spacer>
                </v-toolbar>
                </template> 
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                small
                class="mr-2"
                @click="fetchReport(item)"
                >
                create
                </v-icon>
                <v-icon
                small
                @click="deleteItem(item)"
                >
                delete
                </v-icon>
            </template>
            </v-data-table>
            </v-col>
         </v-row>    
</template>

<script>
import axios from "axios"
export default {
    name: 'OrderListTable',
    data(){
       return{
            headers: [
            {
                text: 'Orders',
                align: 'start',
                sortable: false,
                value: '#',
            },
            { text: 'Order Number', value: 'orderNumber' },
            { text: 'Invoice Number', value: 'invoiceNumber' },
            { text: 'Amount', value: 'orderAmount' },
            { text: 'Items', value: 'listItems.length' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        orders: []
       }
    },
    created(){
      console.log('----------------------------------------s')
        this.fetchOrderList();
    },

    methods: {
        async fetchOrderList() {
          console.log('-----------------------------------')
        await axios.get('http://localhost:3000/api/v1/orders')
            .then(res => {
               this.orders = res.data
            })
            .catch(err => {
                console.log(err)
            })
           
        },

        async fetchReport(item){
            await axios.get(`http://localhost:3000/api/v1/reports/${item.invoiceNumber}`, {
                responseType: 'arraybuffer'
            })
            .then(res => {
                console.log(res)

                let blob = new Blob([res.data], {type: 'application/pdf'})
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = 'Report.pdf'
                link.click()
            })
            .catch(err => {
                console.log(err)
            })

        }
    }
}
</script>