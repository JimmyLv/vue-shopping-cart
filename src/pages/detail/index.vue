<template>
    <div v-if="product" class="product">
        <div class="product-detail">
            <h3>产品信息</h3>
            <ul class="product-info">
                <li>编号：{{ id }}</li>
                <li>名称：{{ product.name }}</li>
                <li>品牌：{{ product.brand }}</li>
                <li class="product-cost">价格：¥ {{ product.cost }}</li>
            </ul>
        </div>
        <hr style="margin: 10px 0;">
        <div class="product-desc">
        <h3>产品介绍</h3>
        <div class="product-image">
            <img :src="product.image">
        </div></div>
        <p>
            wonderful products, think different.
        </p>
        <hr style="margin: 10px 0;">
        <p>
          当前购物车共{{cartTotalAmount}}件商品，价值{{cartTotalPrice}}元
        </p>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import product_data from '../../assets/product'

  export default {
    data() {
      return {
        // 获取路由中的参数
        id: parseInt(this.$route.params.id),
        product: null,
      }
    },
    computed: {
      ...mapGetters(['cartTotalAmount', 'cartTotalPrice']),
    },
    methods: {
      getProduct() {
        // 真实环境通过 ajax 获取，这里用异步模拟
        setTimeout(() => {
          this.product = product_data
        }, 500)
      }
    },
    mounted() {
      this.getProduct()
    },
  }
</script>
<style scoped src="./detail.css"></style>
