<template>
    <div>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email-input">Email address</label>
                <input type="text" class="form-control" id="email-input" placeholder="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password-input">Password</label>
                <input type="password" class="form-control" id="password-input" placeholder="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        }).then(() => {
          this.$router.push('/');
        });
      },
    },
  };
</script>
