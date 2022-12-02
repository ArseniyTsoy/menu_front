<template>
  <base-title>Добавление новой позиции</base-title>
  <base-form v-on:submit.prevent="processInput">
    <div class="flex">
      <side-block>
        <input class="box" type="text" name="title" placeholder="Наименование позиции" v-model="title" required>

        <select class="box" name="categoryId" v-model="categoryId" required>
          <option :value="null" selected disabled hidden>
            Выберите категорию
          </option>  
          <option v-for="cat in catList" :value="cat.id" :key="cat.id">
            {{ cat.title }}
          </option>
        </select>
      </side-block>

      <side-block>
        <input class="box" type="number" min="0" name="price" placeholder="Стоимость (руб.)" v-model="price" required>
        <input class="box" type="file" required accept=".jpg,.jpeg,.png" ref="image" @change="selectFile">
      </side-block>
      
      <textarea class="box" name="description" placeholder="Краткое описание товара" cols="30" rows="10" maxlength="255" v-model="description" required></textarea>
      
      <base-button type="submit" mode="edit-btn">
        Сохранить
      </base-button>
    </div>
  </base-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      categoryId: null,
      image: null,
      price: null,
      description: null
    };
  },
  methods: {
    selectFile() {
      this.image = this.$refs.image.files[0];
    },
    async processInput() {

      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("categoryId", this.categoryId);
      formData.append("image", this.image);
      formData.append("price", this.price);
      formData.append("description", this.description);

      const configs = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      try {
        await axios.post(
          "http://localhost:3000/add-position", 
          formData,
          configs
        );
        
        this.$router.push("/");
      } catch(err) {
        console.log(err);
      }
    }
  },
  computed: {
    catList() {
      return this.$store.getters.categoriesGetter;
    }
  }
}
</script>