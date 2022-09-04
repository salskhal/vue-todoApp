<template>
  <nav>
    <router-link to="/">All</router-link> 
    <router-link to="/active">Active</router-link>
    <router-link to="/completed">Completed</router-link>
  </nav>
</template>


<style scoped>


a{
    text-decoration: none;
    color: #333;
    font-weight: 600;
}
nav {
  display: flex;
  list-style: none;
  width: 100%;
  margin-inline: auto;
  justify-content: space-between;
  margin-top: 40px;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 40px;
  margin-bottom: 20px;
}

nav a.router-link-exact-active {
   border-bottom: 4px solid #2f80ed;
}

@media screen and (max-width: 500px) {
  nav{
    padding: 0 10px;
  }
}


</style>