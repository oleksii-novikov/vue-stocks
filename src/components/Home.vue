<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
        <app-products></app-products>
    </div>
</template>

<script>
    import Products from './products/Products';

    export default {
      computed: {
        funds() {
          return this.$store.getters.funds;
        },
      },
      components: {
        appProducts: Products,
      },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
