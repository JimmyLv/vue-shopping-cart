<template>
    <div id="app">
        <cart-title />
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
  import cartTitle from './components/cartTitle'

  export default {
    name: 'App',
    components: { cartTitle },
  }
</script>

<style src="./base.css"></style>