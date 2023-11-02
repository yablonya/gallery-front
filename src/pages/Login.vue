<template>
  <form class="login-form">
    <img src="/icons/login-icon.png" alt="login-icon">
    <h2>Log in to your account</h2>
    <div class="mb-3">
      <label for="email">Email</label>
      <input class="form-control" type="email" id="email" name="email">
    </div>
    <div class="mb-3">
      <label for="password">Password</label>
      <input class="form-control" type="password" id="password" name="password">
    </div>
    <Button type="submit" variant="filled" style="margin-top: 20px">Log in</Button>
    <router-link to="/registration" class="ref-to-register">Don't have an account?</router-link>
    <router-link to="/" style="margin-top: 30px">
      <Button variant="outlined" style="width: 100%">To Main Page</Button>
    </router-link>
  </form>
</template>

<script>
import Button from "@/components/ui/Button.vue";

export default {
  components: {Button}
}
</script>

<style lang="scss" scoped>
.login-form {
  margin: 0 auto;
  padding: 40px 20px 300px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
}
.login-form label {
  padding-bottom: 8px;
}

.login-form h2 {
  font-weight: 300;
  text-align: center;
  margin-bottom: 25px;
}

.login-form img {
  margin: 0 auto;
  width: 100px;
  height: auto;
}

.login-form input:active,
.login-form input:focus {
  border-color: #FB6376;
  box-shadow: 0 0 0 0.25rem #FCB1A6;
}

.ref-to-register {
  padding: 5px 0 0 5px;
  &:hover {
    color: #B5838D;
  }
}
</style>