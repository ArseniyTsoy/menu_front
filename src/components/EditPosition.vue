<template>
  <base-title>Редактировать позицию</base-title>
  <base-form v-on:submit.prevent="editPosition" mode="product">
    <img :src="'http://localhost:3000/' + oldImageUrl" :alt="id">

    <div class="flex">

      <side-block>
        <label for="title">Наименование</label>
        <input class="box" type="text" id="title" name="title" required v-model="title">

        <label for="categoryId">Категория</label>
        <select class="box" id="categoryId" name="categoryId" required v-model="categoryId">
          <option v-for="cat in categories" :key="cat.id" :value="cat.id" :selected="(id === cat.id) ? true : false">{{ cat.title }}</option>
        </select>
      </side-block>

      <side-block>
        <label for="price">Стоимость (руб.)</label>
        <input class="box" type="number" min="0" id="price" name="price" required v-model="price">

        <label for="categoryId">Смена картинки</label>
        <input class="box" type="file" name="image" accept=".jpg,.jpeg,.png" ref="image" @change="selectFile">
      </side-block>
      
      <label class="description" for="description">Краткое описание</label>
      <textarea class="box" id="description" name="description" cols="30" rows="10" maxlength="255" required v-model="description"></textarea>
    </div>
    
    <div class="flex-btn">
      <base-button type="submit" mode="edit-btn">Сохранить</base-button>
      <base-button link to="/" mode="delete-btn">Назад</base-button>
    </div>
  
  </base-form>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      title: null,
      description: null,
      image: null,
      oldImageUrl: null,
      price: null,
      categoryId: null
    };
  },
  methods: {
    selectFile() {
      this.image = this.$refs.image.files[0];
    },
    async editPosition() {
      try {
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("categoryId", this.categoryId);
        formData.append("oldImageUrl", this.oldImageUrl);
        formData.append("image", this.image);
        formData.append("price", this.price);
        formData.append("description", this.description);

        const configs = {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem("token")
          }
        };

        await axios.post(
          `http://localhost:3000/edit-position/${this.id}`, 
          formData, 
          configs
        );

        this.$router.push("/");
      } catch(err) {
        console.log("Caught!");
        console.log(err);
        this.$router.push("/login");
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categoriesGetter;
    }
  },
  mounted() {
    const allPositions = this.$store.getters.positionsGetter;
    const chosenPosition = allPositions.find(el => el.id === parseInt(this.id));

    this.title = chosenPosition.title;
    this.description = chosenPosition.description;
    this.oldImageUrl = chosenPosition.imageUrl;
    this.price = chosenPosition.price;
    this.categoryId = chosenPosition.categoryId;
  }
}
</script>

<style scoped>

img {
  height: 25rem;
  object-fit: cover;
  margin-bottom: 1rem;
}

label {
  font-size: 1.5rem;
  color:var(--light-color);
}

label.description {
  margin: 1rem auto;
}

button,
a {
  width: 40%;
}

.flex-btn {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-btn > * {
  flex: 1;
}

</style>