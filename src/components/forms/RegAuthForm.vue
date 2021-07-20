<template>
  <form @submit.prevent="submit">
    <div class="modal__container-header">
      <h3 class="title" v-if="registration">Регистрация</h3>
      <h3 class="title" v-if="!registration">Авторизация</h3>
    </div>
    <div class="modal__container-body">
      <input
        type="text"
        class="modal__container-body__form-fields"
        placeholder="Email"
        v-model.trim="email"
        :class="{
          error:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
      <small class="error-msg" v-if="$v.email.$dirty && !$v.email.required">
        Поле email не должно быть пустым
      </small>
      <small class="error-msg" v-else-if="$v.email.$dirty && !$v.email.email">
        Введите корректный email
      </small>
      <input
        type="number"
        class="modal__container-body__form-fields"
        placeholder="Ваш телефон"
        v-if="registration"
        v-model="phone"
      />
      <input
        type="password"
        class="modal__container-body__form-fields"
        placeholder="Пароль"
        v-model.trim="password"
        :class="{
          error:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength)
        }"
      />
      <small class="error-msg" v-if="$v.password.$dirty && !$v.password.required">
        Введите пароль!
      </small>
      <small class="error-msg" v-else-if="$v.password.$dirty && !$v.password.minLength">
        Пароль должен быть больше {{$v.password.$params.minLength.min}} символов!
      </small>
    </div>
    <div class="modal__container-footer">
      <button
        v-if="!registration"
        type="submit"
        class="btn modal__container-footer__button"
      >
        Войти
      </button>
      <button
        type="submit"
        class="btn modal__container-footer__button"
        v-if="registration"
      >
        Регистрация
      </button>
      <p class="reg-desc" v-if="!registration">
        Нет аккаунта?
        <span @click="registration = true" class="reg-link">Создайте его</span>
      </p>
      <p @click="registration = false" class="reg-link" v-if="registration">
        К авторизации
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "RegAuthForm",
  data() {
    return {
      email: "",
      phone: "",
      password: "",
      registration: false,
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData);
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  .error-msg {
    color: red;
    font-size: 14px;
  }
  &__container-header {
    .title {
      color: #000;
      font-weight: normal;
    }
  }
  &__container-body {
    margin-top: -10px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__form-fields {
      width: 150px;
      height: 30px;
      margin-top: 10px;
      border: none;
      border-bottom: 1px solid #ff6c6c;

      &::placeholder {
        color: #000;
        font-size: 14px;
      }
    }
  }
  &__container-footer {
    margin-top: 15px;
    .btn {
      height: 40px;
      width: 150px;
      border: none;
      background: #ff6c6c;
      border-radius: 4px;
      color: #fff;
      font-size: 18px;
      font-family: Montserrat;
      cursor: pointer;
    }
    .reg-desc {
      color: #000;
    }
    .reg-link {
      color: #333;
      text-decoration: underline;
      font-weight: normal;
      cursor: pointer;
    }
  }
}
</style>
