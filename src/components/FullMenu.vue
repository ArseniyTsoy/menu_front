<template>
  <base-title>Наше меню</base-title>
  <section class="grid-container">
    <base-box v-for="pos in positions" :key="pos.id">

      <img :src="`http://localhost:3000/${pos.imageUrl}`" :alt="pos.title">
      
      <h3>{{ pos.title }}</h3>
      
      <div class="category">{{ (categories.find(el => el.id === pos.categoryId)).title }}</div>
      <div class="description">{{ pos.description }}</div>
      <div class="price">{{ pos.price }} руб.</div>

      <base-button link :to="`/edit/${pos.id}`" mode="edit-btn">
        Редактировать
      </base-button>
      
      <base-button @click="deletePosition(pos.id)" mode="delete-btn">
        Удалить
      </base-button>
    </base-box>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      positions: null,
      categories: null
    };
  },
  methods: {
    async deletePosition(id) {
      try {
        await axios.delete(`http://localhost:3000/delete-position/${id}`);

        this.$router.go();
      } catch(err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3000");

    this.$store.dispatch("setPositions", data.positions);
    this.$store.dispatch("setCategories", data.categories);
    
    this.positions = data.positions;
    this.categories = data.categories;
  }
}
</script>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 35rem);
  gap:1.5rem;
  align-items: flex-start;
  justify-content:center;
}

img {
  height: 40%;
  width: 100%;
  object-fit: contain;
  margin-bottom: 1rem;
}

h3 {
  margin:.5rem 0;
  font-size: 2rem;
  color:var(--black);
}

.category {
  font-size: 1.8rem;
  color:var(--green);
}

.description {
  height: 20%;
  padding-top: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color:var(--light-color);
  overflow-x: scroll;
}

.price {
  position: absolute;
  top:1rem; left:1rem;
  padding:1rem;
  font-size: 2rem;
  color:var(--white);
  background-color: var(--red);
  border-radius: .5rem;
}

</style>