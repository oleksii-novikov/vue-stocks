<template>
    <div class="row list-group">
        <app-product v-for="product in products" v-bind:key="product.id" v-bind:product="product"></app-product>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Product from './Product';

  export default {
    beforeMount() {
      this.fetchProducts();
    },
    components: {
      appProduct: Product,
    },
    methods: {
      ...mapActions('products', [
        'fetchProducts',
      ]),
    },
    computed: {
      ...mapGetters('products', [
        'products',
      ]),
    },
  };
</script>