<template>
  <div>
    <header>
      <h1>Vue.js SPA</h1>
    </header>

    <input type="file" @change="onFileSelected">
    <button @click="PostProduct">nur</button>
  </div>
</template>


<script>
import getProducts from "./services/getProducts";
import postProduct from "./services/postProduct";

export default {
  data() {
    return {
      selectedFile: null,
      test: false,
      data: null,
      productName: "String1",
      productDescription: "String2",
      productCategory: "String3",
      productPrice: "String4"
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    GetProducts() {
      getProducts().then(res => {
        console.log(res);
      });
    },

    PostProduct() {
      const obj = {
        productName: this.productName,
        productDescription: this.productDescription,
        productCategory: this.productCategory,
        productPrice: this.productPrice
      };
      postProduct(this.selectedFile, obj).then(res => console.log(res.data));
    }
  }
};
</script>

