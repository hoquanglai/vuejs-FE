<script lang="ts">
export default {
  props: ["title"],
  data() {
    return {
      count: 50,
    };
  },
};
</script>
<template>
  <h1>Here is a child component!</h1>
  <button @click="count++">
    You clicked me {{ count }} times . {{ title }}
  </button>
</template>
