<template>
  <form class="create" @submit.prevent="submit">
    id: <input type="text" v-model="fields.id" /> image:
    <input type="text" v-model="fields.image" /> name:
    <input type="text" v-model="fields.name" /> price:
    <input type="text" v-model="fields.price" />
    <button type="submit" class="btn">Create</button>
  </form>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "CreateProduct",
  data() {
    return {
      fields: {
        id: null,
        image: "1.png",
        name: "",
        price: null,
      },
    };
  },
  methods: {
    async submit() {
      try {
        await firebase
          .firestore()
          .collection("Turkey")
          .add(
            {
              fields: {
                id: this.fields.id,
                image: this.fields.image,
                name: this.fields.name,
                price: this.fields.price,
              },
            }
          );
        this.fields.id = null
        this.fields.image = "1.jpg"
        this.fields.name = ""
        this.fields.price = null
        console.log("Complete");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.create {
  color: #000;
}
</style>
