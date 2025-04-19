<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Form 1</RouterLink>
        <RouterLink to="/form2">Form 2</RouterLink>
        <RouterLink to="/form3">Form 3</RouterLink>
        <RouterLink to="/form4">Form 4</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  height: 150px;
  display: flex;
  flex-direction: column;

  .logo {
    display: block;
    margin: 0 auto;
  }

  nav {
    width: 100%;
    font-size: 14px;
    text-align: center;
    margin-top: 0;

    a.router-link-exact-active {
      color: var(--color-text) !important;
    }

    a.router-link-exact-active:hover {
      background-color: transparent;
    }

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
    }

    a:first-of-type {
      border: 0;
    }
  }
}
</style>
