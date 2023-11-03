<template>
  <form class="register-form">
    <img src="/icons/register-icon.png" alt="register-icon">
    <h2>Join us!</h2>
    <div class="mb-3">
      <label for="name">Name</label>
      <input
          v-model="user.name"
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Майкл"
          @input="validateName"
      >
      <div v-show="errors.name" class="errorText">
        Перевірте чи введені вами дані відповідають всім вимогам:
        <ol>
          <li>Початок з великої літери</li>
          <li>Лише кирилиця</li>
          <li>Ніяких спеціальних символів та чисел</li>
        </ol>
      </div>
    </div>

    <div class="mb-3">
      <label for="surname">Surname</label>
      <input
          v-model="user.surname"
          type="text"
          class="form-control"
          id="surname"
          name="surname"
          placeholder="Джордан"
          @input="validateName"
      >
      <div v-show="errors.surname" class="errorText">
        Перевірте чи введені вами дані відповідають всім вимогам:
        <ol>
          <li>Початок з великої літери</li>
          <li>Лише кирилиця</li>
          <li>Ніяких спеціальних символів та чисел</li>
        </ol>
      </div>
    </div>

    <div class="mb-3">
      <label for="midname">Middle name</label>
      <input
          v-model="user.midname"
          type="text"
          class="form-control"
          id="midname"
          name="midname"
          placeholder="Тарасович"
          @input="validateName"
      >
      <div v-show="errors.midname" class="errorText">
        Перевірте чи введені вами дані відповідають всім вимогам:
        <ol>
          <li>Початок з великої літери</li>
          <li>Лише кирилиця</li>
          <li>Ніяких спеціальних символів та чисел</li>
        </ol>
      </div>
    </div>

    <div class="mb-3">
      <label for="email">Email</label>
      <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="example@bruh.com"
          @input="validateEmail"
      >
      <div v-show="errors.email" class="errorText">
        Некоректна email адреса. Будь-ласка перевірте, чи ви вказали її правильно
      </div>
    </div>

    <div class="mb-3">
      <label for="password">Password</label>
      <div class="password-input" id="password-input">
        <input
            v-model="user.password"
            :type="passwordType"
            class="form-control"
            id="password"
            name="password"
            @input="validatePassword"
        >
        <img src="/icons/show-password.png" alt="Show Password" id="showPassword" @click="showPassword">
      </div>
      <div v-show="errors.password" class="errorText">
        Перевірте чи введені вами дані відповідають всім вимогам:
        <ol>
          <li>Лише латиниця</li>
          <li>Хоча б одна велика літера</li>
          <li>Хоча б одна цифра</li>
          <li>Хоча б один спеціальний символ</li>
          <li>Мінімум 8 символів</li>
        </ol>
      </div>
    </div>

    <div class="mb-3">
      <label for="cellphone">Phone number</label>
      <input
          v-model="user.cellphone"
          class="form-control"
          id="cellphone"
          name="cellphone"
          v-mask="'+38(0##)-###-##-##'"
          type="tel"
          placeholder="+38(0__)-___-__-__"
      >
    </div>

    <div class="mb-3">
      <label for="group">Group</label>
      <select v-model="user.group" class="form-control" name="group" id="group">
        <option value="IA-21">IA-21</option>
        <option value="IA-22">IA-22</option>
        <option value="IA-23">IA-23</option>
        <option selected value="IA-24">IA-24</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="date">Date</label>
      <input
          v-model="user.date"
          type="date"
          class="form-control"
          id="date"
          name="date"
          min="1895-10-03"
          max="2023-10-02"
      >
    </div>

    <div class="mb-3">
      <fieldset>
        <legend>Select your gender:</legend>
        <div class="gender-buttons">
          <div>
            <input v-model="user.gender" type="radio" id="male" name="gender" value="Male" />
            <label for="male">Male</label>
          </div>

          <div>
            <input v-model="user.gender" type="radio" id="female" name="gender" value="Female" />
            <label for="female">Female</label>
          </div>

          <div>
            <input v-model="user.gender" type="radio" id="other" name="gender" value="Other" checked/>
            <label for="other">Other</label>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="mb-3">
      <label for="file-input" class="file-label">
        Choose picture for avatar
        <img src="/icons/add-image.png" alt="add-file">
      </label>
      <input type="file" id="file-input" name="file">
    </div>

    <Button variant="filled" @click.prevent="addUser">Register</Button>
    <router-link to="/login" class="ref-to-login">Already joined us?</router-link>
    <router-link to="/" style="margin-top: 30px">
      <Button variant="outlined" style="width: 100%">To Main Page</Button>
    </router-link>
  </form>
  <RegisterTable
      @duplicateRows="handleDuplicateRows"
      @deleteRows="handleDeleteRows"
      @changeUserCheckBox="handleChangeCheckBox" :users="users"/>
</template>

<script>
import {mask} from 'vue-the-mask'
import Button from "@/components/ui/Button.vue";
import {checkNewUser, fieldValidator} from "@/lib/registerValidation";
import RegisterTable from "@/components/RegisterTable.vue";
export default {
  data() {
    return {
      users: [],
      passwordType: 'password',
      date: {
        minDate: '',
        maxDate: '',
      },
      user: {
        id: Date.now(),
        checkBox: false,
        name: '',
        surname: '',
        midname: '',
        email: '',
        password: '',
        cellphone: '',
        group: 'IA-24',
        date: '2023-10-02',
        gender: 'Other'
      },
      errors: {
        name: false,
        surname: false,
        midname: false,
        email: false,
        password: false
      }
    }
  },
  components: {RegisterTable, Button},
  directives: {mask},
  methods: {
    validateName(event) {
      fieldValidator(event, this.user, this.errors)
    },
    validateEmail(event) {
      fieldValidator(event, this.user, this.errors)
      this.errors.emailIsPresent = false;
    },
    validatePassword(event) {
      fieldValidator(event, this.user, this.errors)
    },
    showPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    addUser() {
      if (checkNewUser(this.user, this.errors, this.users)) {
        this.users.push(this.user)
        this.user = {
          id: Date.now(),
          checkBox: false,
          name: '',
          surname: '',
          midname: '',
          email: '',
          password: '',
          cellphone: '',
          group: 'IA-24',
          date: '2023-10-02',
          gender: 'Other'
        }
      }
    },
    handleDuplicateRows() {
      const selected = this.users.filter(user => user.checkBox);
      const copies = JSON.parse(JSON.stringify(selected))
      copies.forEach(copy => {
        copy.id = Date.now()
        copy.checkBox = false
        this.users.push(copy)
      })
    },
    handleDeleteRows() {
      this.users = this.users.filter(user => !user.checkBox);
    },
    handleChangeCheckBox(id) {
      this.users.forEach(user => {
        if (user.id === id) {
          user.checkBox === true? user.checkBox = false : user.checkBox = true;
        }
      })
    }
  },
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
  color: black;
  text-decoration: none;
  &:hover {
    color: #B5838D;
  }
}

.gender-buttons {
  display: flex;
  padding: 10px 0;
  div {
    margin-right: 30px;
    label {
      padding: 0 0 0 5px;
    }
  }
}

.errorText {
  color: red;
  font-size: 14px;
  padding-top: 5px;
}
</style>