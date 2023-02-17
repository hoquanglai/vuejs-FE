<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Slide from "./components/Slide.vue";

// import "typeface-roboto/index.css";
// import "./assets/css/main.css";
</script>

<style>
@import "../node_modules/@fontsource/roboto/index.css";
</style>

<template>
  <Header></Header>
  <Slide></Slide>
  <!-- <div id="app" class="page-container"></div> -->
</template>

<style scoped></style>
