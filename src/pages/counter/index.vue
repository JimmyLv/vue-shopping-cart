<template>
  <div class="counter">
    <div class="info">
      <button class="btn" @click="decrease">-1</button>
      <span>{{count}}</span>
      <span>是否偶数 {{countIsOdd}}</span>
      <button class="btn" @click="increment()">+1</button>
      <button class="btn" @click="increment(5)">+5</button>
      <button class="btn" @click="increment(6)">+6</button>
    </div>
    <p>
      <span>HASH {{countHash}}</span>
    </p>
    <button class="btn" @click="incrementDelay">+1 delay</button>
    <button class="btn" @click="incrementDelayWrong">+1 delay(wrong)</button>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        count: state => state.counter.count
      }),
      ...mapGetters([
        'countIsOdd',
        'countHash',
      ]),
    },
    methods: {
      ...mapActions([
        'decrease', 'increment', 'incrementDelay', 'incrementDelayWrong'
      ]),
    },
  }
</script>

<style scoped src="./detail.css"></style>
