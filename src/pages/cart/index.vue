<template>
  <div class="page-cart">
    <div class="title">总价 {{totalPrice}}</div>
    <div class="list">
      <item
        v-for="product in cartProducts"
        :key="product.code"
        :product="product"
        @amount-change="handleAmountChange(product, arguments)"
      />
    </div>
    <add-product
      @add="handleAddProduct"
    />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import item from './components/cartItem'
  import addProduct from './components/addProduct'

  const generateProduct = code => ({
    code,
    amount: 1,
    price: 100,
  })

  export default {
    name: 'cart',
    computed: {
      ...mapState({
        cartProducts: state => state.cart.cartProducts,
      }),
      ...mapGetters({
        totalPrice: 'cartTotalPrice'
      }),
    },
    methods: {
      ...mapActions([
        'cartAddProduct',
        'cartChangeCount',
      ]),
      handleAmountChange(product, agrs) {
        const amount = agrs[0]
        this.cartChangeCount({
          code: product.code,
          amount,
        })
      },
      handleAddProduct: function(code) {
        this.cartAddProduct(generateProduct(code))
      },
    },
    components: {
      item,
      addProduct,
    }
  }
</script>

<style src="./cart.css" />
