<template>
    <v-container fluid>
        <v-btn
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
  <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
      <v-list>
       <v-list-item>
         <v-list-item-title>Home</v-list-item-title>
       </v-list-item>
       <v-divider></v-divider>
        <v-list-item link @click="$router.push({path: '/orders'})"> 
              <v-list-item-icon>
                <v-icon>mdi-basket</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Orders</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
</template>

<script>

export default {
  name: "MenuDrawer",

  data(){
      return {
          drawer: null,
      }
  }

};
</script>