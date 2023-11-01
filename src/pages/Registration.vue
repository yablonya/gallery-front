<template>
  <form class="register-form">
    <img src="/icons/register-icon.png" alt="register-icon">
    <h2>Join us!</h2>
    <div class="mb-3">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name="name" placeholder="Майкл">
    </div>
    <div class="mb-3">
      <label for="surname">Surname</label>
      <input type="text" class="form-control" id="surname" name="surname" placeholder="Джордан">
    </div>
    <div class="mb-3">
      <label for="midname">Middle name</label>
      <input type="text" class="form-control" id="midname" name="midname" placeholder="Тарасович">
    </div>
    <div class="mb-3">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="example@bruh.com">
    </div>
    <div class="mb-3">
      <label for="password">Password</label>
      <div class="password-input" id = "password-input">
        <input type="password" class="form-control" id="password" name="password">
        <img src="/icons/show-password.png" alt="Show Password" id="showPassword">
      </div>
    </div>
    <div class="mb-3">
      <label for="cellphone">Phone number</label>
      <input
          class="form-control"
          id="cellphone"
          v-mask="'+38(0##)-###-##-##'"
          type="tel"
          placeholder="+38(0__)-___-__-__"
      >
    </div>
    <div class="mb-3">
      <label for="date">Date</label>
      <input type="date" class="form-control" id="date" name="date">
    </div>
    <div class="mb-3">
      <label for="file-input" class="file-label">
        Choose picture for avatar
        <img src="/icons/add-image.png" alt="add-file">
      </label>
      <input type="file" id="file-input" name="file">
    </div>
    <Button variant="filled">Register</Button>
    <router-link to="/login" class="ref-to-login">Already joined us?</router-link>
    <router-link to="/" style="margin-top: 30px">
      <Button variant="outlined" style="width: 100%">To Main Page</Button>
    </router-link>
  </form>
</template>

<script>
import {mask} from 'vue-the-mask'
import Button from "@/components/ui/Button.vue";
export default {
  components: {Button},
  directives: {mask}
}
</script>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px 100px;
  h2 {
    margin: 15px 0;
    font-weight: 300;
    text-align: center;
  }
  > img {
    margin: 0 auto;
    width: 140px;
    height: auto;
  }
  label {
    padding-bottom: 8px;
  }
}

.password-input {
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding-right: 12px;
  }
  img {
    width: 18px;
    height: auto;
    position: absolute;
    right: 15px;
    top: calc(50% - 9px);
  }
}

.file-label {
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #CED4DA;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  img {
    margin-left: 10px;
    margin-top: 5px;
    width: 25px;
    height: auto;
  }
  &:hover {
    border-color: #5D2A42;
  }
}

#file-input {
  box-shadow: none;
  margin-left: 5px;
  &::file-selector-button {
    display: none;
  }
}

.ref-to-login{
  padding: 5px 0 0 5px;
  &:hover {
    color: #B5838D;
  }
}
</style>