<template>
  <div id="centr">
    <form id="imageUpload">
      <div class="imageHeader">
        <input
          type="file"
          id="image_uploads"
          name="image_uploads"
          accept=".jpg, .jpeg, .png"
          @change="onFileSelected(item,$event)"
        >
        <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
      </div>
      <div class="imageMain">
        <div class="text" v-if="item.image===false">No files selected</div>
        <img class="image" :src="item.image">
      </div>
      <div class="imageFooter">
        <button @click.prevent="removeImage(item)">Remove image</button>
        <!-- <button @click="PostProduct">Submit</button>-->
      </div>
    </form>
  </div>
  <!--<div>
        <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
        <input
          type="file"
          id="image_uploads"
          name="image_uploads"
          accept=".jpg, .jpeg, .png"
          @change="onFileSelected(item,$event)"
        >
      </div>

      <div class="preview">
        <p>
          No files currently selected for upload
          <img :src="item.image">
        </p>
      </div>

      <div>
        <button @click="removeImage(item)">Remove image</button>
        
  <button @click="PostProduct">nur</button>-->
</template>


<script>
import getProducts from "./services/getProducts";
import postProduct from "./services/postProduct";

export default {
  data() {
    return {
      item: { image: false },
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
    /************************************************/

    onFileSelected(item, event) {
      this.selectedFile = event.target.files[0];
      var image = new Image();
      var reader = new FileReader();
      reader.onload = e => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    },
    /************************************************/

    removeImage(item) {
      item.image = false;
    },
    /************************************************/

    GetProducts() {
      getProducts().then(res => {
        console.log(res);
      });
    },
    /************************************************/

    PostProduct() {
      const obj = {
        productName: this.productName,
        productDescription: this.productDescription,
        productCategory: this.productCategory,
        productPrice: this.productPrice
      };
      //postProduct(this.selectedFile, obj).then(res => console.log(res.data));
    }
    /************************************************/
  }
};
</script>


<style lang="scss">
@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

#centr {
  width: 100vw;
  height: 100vh;
  @include flex();
}
#imageUpload {
  width: 40vw;
  height: 240px;
  min-width: 480px;
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 20px 14px #888888;
  display: grid;
  grid-template-rows: 25% 50% 25%;
  grid-template-areas:
    "headerForm"
    "mainForm"
    "footerForm";

  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 20px;
  .imageHeader {
    grid-area: headerForm;
    @include flex();
    input {
      width: 0%;
      visibility: hidden;
    }
    label {
      @include flex();
      background-color: rgb(119, 119, 221);
      border-radius: 3px;
      height: 35px;
      padding-left: 10px;
      padding-right: 10px;
      color: black;
    }
  }

  .imageMain {
    grid-area: mainForm;
    border: 1px solid black;
    margin: 10px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "textMain imageMain";
    .text {
      grid-area: textMain;
      background-color: red;
      padding-left: 10px;
      padding-right: 10px;
      word-break: break-all;
      height: 98px;
    }
    .image {
      grid-area: imageMain;
      height: 98px;
    }
  }
  .imageFooter {
    grid-area: footerForm;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
  }
}
</style>





