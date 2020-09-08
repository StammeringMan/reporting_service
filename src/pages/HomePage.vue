<template>
 <v-container fluid>
   <MenuDrawer />
 </v-container>
</template>

<script>
import MenuDrawer from "./../components/Drawers/MenuDrawer";

export default {
  name: "HomePage",
  components: {
    MenuDrawer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
