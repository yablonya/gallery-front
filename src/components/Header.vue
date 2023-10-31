<script>
import Button from "@/components/ui/Button.vue";

export default {
  components: {Button},
  computed: {
    isSpecialRoute() {
      return this.$route.path === '/registration';
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row header-content">
        <div :class="{'center-content': isSpecialRoute}" class="col">
          <router-link to="/">
            <h1 class="header-logo">
              Da Vinci Art
            </h1>
          </router-link>
        </div>
        <div v-if="!isSpecialRoute" class="col login-register">
          <router-link to="/login">
            <Button style="border-radius: 25px" variant="outlined">Login</Button>
          </router-link>
          <router-link to="/registration">
            <Button style="border-radius: 25px" variant="outlined">Register</Button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin mobile {
  @media (max-width: 449px) {
    @content;
  }
}

header {
  border-bottom: 1px solid #5D2A42;
  padding: 10px 30px;
}

.header-content .col {
  display: flex;
  align-items: center;
  @include mobile {
    justify-content: center;
  }
}

.center-content {
  justify-content: center;
}

.header-logo {
  white-space: nowrap;
  padding: 10px 0;
  margin: 0;
  font-family: 'Cormorant Infant', serif;
  text-align: center;
}
.header-logo:hover {
  color: black;
}

.login-register {
  display: flex;
  justify-content: flex-end;
  gap: 15px
}

.header-btn {
  border-radius: 25px;
}
</style>
