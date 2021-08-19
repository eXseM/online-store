<template>
  <div class="contacts">
    <h2 class="title">Контакты</h2>
    <div class="contacts__info">
      <div class="contacts__info__left">
        <h2 class="left-title">Связаться с нами</h2>
        <div class="phone-mail">
          <p class="phone-mail__text">
            Телефон: <a class="phone-mail__link">8-800-555-35-35</a>
          </p>
          <p class="phone-mail__text">
            Телефон менеджера доставки:
            <a class="phone-mail__link">8-800-555-35-35</a>
          </p>
          <p class="phone-mail__text">
            E-mail: <a class="phone-mail__link"> mirindeiky_krd@mail.ru </a>
          </p>
        </div>
        <h2 class="left-time">Время работы</h2>
        <p class="left-time-info">С 9:00 до 22:00</p>
        <div class="place">
          <h2 class="left-title">Как нас найти</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.3045633516027!2d38.98998627650733!3d45.04032163189097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f8edd12bd59%3A0xf8e06d923713ff06!2z0JLRi9GB0YjQsNGPINCo0LrQvtC70LAg0J_RgNC-0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1624708728100!5m2!1sru!2sru"
            width="90%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            class=""
          ></iframe>
        </div>
      </div>
      <div class="contacts__info__right">
        <h2 class="right-title">Задать вопрос</h2>
        <form class="form" @submit="submit">
          <input
            class="form__fields"
            type="text"
            v-model="fields.name"
            placeholder="Ваше имя"
            required
          />
          <input
            class="form__fields"
            type="text"
            v-model="fields.phone"
            placeholder="Ваш телефон"
            required
          />
          <input
            class="form__fields"
            type="text"
            v-model="fields.email"
            placeholder="Ваш e-mail"
          />
          <button type="submit" class="form__btn">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      fields: {
        phone: "",
        name: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      console.log("Complete");
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  .title {
    width: 75%;
    text-align: left;
    color: #000;
    font-weight: 500;
    font-size: 30px;
  }
  &__info {
    display: flex;
    justify-content: center;
    width: 100%;
    &__left {
      width: 35%;
      text-align: left;
      padding-left: 30px;
      .left-title {
        text-align: left;
        color: #4b4b4b;
        font-weight: 500;
        font-size: 26px;
      }
      .left-time {
        text-align: left;
        color: #4b4b4b;
        font-weight: 500;
        font-size: 26px;
        padding-top: 20px;
      }
      .left-time-info {
        font-size: 16px;
      }
      .place {
        .left-title {
          padding-top: 20px;
        }
      }
      .phone-mail {
        &__text {
          font-size: 18px;
          padding-top: 15px;
        }
        &__link {
          text-decoration: underline;
          font-weight: 500;
        }
      }
    }
    &__right {
      width: 35%;
      text-align: center;
      padding-left: 30px;

      .right-title {
        color: #4b4b4b;
        font-weight: 500;
        font-size: 26px;
      }
      .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__fields {
          margin-top: 30px;
          width: 250px;
          height: 30px;
          border: none;
          border-bottom: solid 1px #ff6c6c;
        }
        &__btn {
          margin-top: 30px;
          width: 120px;
          height: 35px;
          background: none;
          border: 1px solid black;
          border-radius: 4px;

          &:hover {
            background: #ff6c6c;
            color: #fff;
            border: none;
          }
        }
        ::placeholder {
          color: #000;
          font-size: 16px;
          font-weight: 300;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .contacts {
    &__info {
      display: flex;
      flex-direction: column;
      &__left {
        width: 100%;
        padding-left: 10px;
      }
      &__right {
        width: 100%;
        padding-left: 0;
      }
    }
  }
}
</style>
