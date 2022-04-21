<template>
  <Header />
  <div class="container">
    <Nav />
    <router-view />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";


import {provide} from "vue"
import store from "@/store"

provide("store", store)

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}

.container {
  width: 40%;
  margin-inline: auto;
}

@media screen and (max-width: 500px) {
  .container{
    width: 90%;
  }
}
@media screen and (max-width: 300px) {
  .container{
    width: 100%;
  }
}
@media screen and (max-width: 700px) {
  .container{
    width: 70%;
  }
}
</style>
