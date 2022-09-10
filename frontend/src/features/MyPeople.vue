<template>
  <div>
    <PreLoader :preloader="preloader" />
    <DataView :value="items" layout="grid">
      <template #grid="slotProps">
        <div style="padding: 0.5em 0" class="col-12 md:col-4 lg:col-3 xs:col-6">
          <PanelVue :header="slotProps.data.name" style="text-align: center">
            <img :src="'/src/images/people/' + generateRandImg() + '.jpeg'" :alt="slotProps.data.brand"/>
              <div class="people-detail">
              Name: {{ slotProps.data.name }}<br />
              height: {{ slotProps.data.height }}<br />
              mass: {{ slotProps.data.mass }}<br />
              hair_color: {{ slotProps.data.hair_color }}<br />
              skin_color: {{ slotProps.data.skin_color
              }}<br />
              eye_color: {{ slotProps.data.eye_color }}<br />
              gender: {{ slotProps.data.gender }}<br />
              birth_year: {{ slotProps.data.birth_year }}<br />
            </div>
            <div class="product-grid-item-content">
              <!-- <img :src="'/src/images/' + slotProps.data.name + '.jpg'" :alt="slotProps.data.name"/> -->
              <!-- <img :src="'./img/' + slotProps.data.name + '.png'" :alt="slotProps.data.name"/> -->
              <img
                src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                :alt="slotProps.data.name"
              />
              <div class="product-name">{{ slotProps.data.name }}</div>
              <!-- <div class="product-description">{{slotProps.data.rotation_period}}</div> -->
              <Rating
                :modelValue="slotProps.data.rating"
                :readonly="true"
                :cancel="false"
              ></Rating>
            </div>
            <div class="product-grid-item-bottom">
              <span class="product-price">${{ slotProps.data.height }}</span>
              <PrimeButton
                icon="pi pi-shopping-cart"
                :disabled="slotProps.data.population === 'OUTOFSTOCK'"
              ></PrimeButton>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
  <PaginatorVue
    :rows="10"
    :totalRecords="totalItemsCount"
    v-model:first="offset"
    @page="onPage($event)"
  ></PaginatorVue>
</template>

<script>
import { getPeople } from "../api/index.js";
import PreLoader from "../components/Preloader.vue";

export default {
  data() {
    return {
      items: [],
      totalItemsCount: 0,
      preloader: true,
      offset: 0,
    };
  },
  created() {
    this.preloader = true;
    getPeople({ page: 1 })
      .then((res) => {
        Object.entries(res.data.results).forEach(([key, value]) => {
          this.totalItemsCount = res.data.count;
          this.items.push(value);
          this.key = key;
        });
      })
      .finally(() => {
        this.preloader = false;
      });
  },
  methods: {
    generateRandImg(){
      return Math.floor(Math.random() * 7);
    },
    onPage(event) {
      this.preloader = true;
      this.items = [];
      getPeople({ page: event.page + 1 })
        .then((res) => {
          Object.entries(res.data.results).forEach(([key, value]) => {
            this.totalItemsCount = res.data.count;
            this.items.push(value);
            this.key = key;
          });
        })
        .finally(() => {
          this.preloader = false;
        });
    },
  },
  components: { PreLoader },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/style.scss";
</style>
