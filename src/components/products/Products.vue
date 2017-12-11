<template>
    <div class="row list-group">
        <app-product v-for="product in products" v-bind:key="product.id" v-bind:product="product"></app-product>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Product from './Product';

  export default {
    beforeMount() {
      this.fetchProducts();
    },
    components: {
      appProduct: Product,
    },
    methods: {
      ...mapActions([
        'fetchProducts',
      ]),
    },
    computed: {
      products() {
        return this.$store.getters.products;
      },
    },
  };
</script>