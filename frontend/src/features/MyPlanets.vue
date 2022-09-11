<template>
  <div>
    <PreLoader :preloader="preloader" />
    <DataView :value="items" layout="grid">
      <template #grid="slotProps">
        <div class="col-12 md:col-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-tag product-category-icon"></i>
                <span class="product-category">Planets</span>
              </div>
              <!-- <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> -->
            </div>
            <div class="product-grid-item-content">
              <img
                :src="'/src/images/planets/' + generateRandImg() + '.jpeg'"
                :alt="slotProps.data.brand"
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
              <span class="product-price"
                >${{ slotProps.data.rotation_period }}</span
              >
              <PrimeButton
                icon="pi pi-shopping-cart"
                @click="purchaseItem()"
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
import { getPlanets } from "../api/index.js";
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
    getPlanets({ page: 1 })
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
    purchaseItem() {
      if (!this.$store.state.data) {
        this.$router.push({ name: "auth" });
      } else {
        alert(`show me your BitCoin!`);
      }
    },
    generateRandImg() {
      return Math.floor(Math.random() * 7);
    },
    onPage(event) {
      this.preloader = true;
      this.items = [];
      getPlanets({ page: event.page + 1 })
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
