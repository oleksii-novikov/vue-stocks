<template>
    <div class="item  col-xs-4 col-lg-4">
        <div class="thumbnail">
            <img class="group list-group-image" v-bind:src="product.thumbnail" alt="">
            <div class="caption">
                <h4 class="group inner list-group-item-heading">
                    {{ product.title }}</h4>
                <p class="group inner list-group-item-text">{{ product.description }}</p>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <p class="lead">${{ product.price }}</p>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <a class="btn btn-success" href="#">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['product'],
    data() {
      return {
      };
    },
  };
</script>
