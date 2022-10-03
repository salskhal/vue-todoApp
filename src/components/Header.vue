<template>
  <div class="al">
    <h1>
      Hi There <input type="text" placeholder="your name" v-model="name" />
    </h1>
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { watch, onMounted } = require("@vue/runtime-core");

let name = ref("");
watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
});
</script>

<style scoped>
.al {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: #333333;
  font-size: 20px;
}

input {
  border: none;
  margin-left: 10px;
  outline: none;
  font-size: 20px;
  font-weight: bold;
}
</style>
