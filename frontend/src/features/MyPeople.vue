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
                <span class="product-category">People</span>
              </div>
            </div>
            <div class="product-grid-item-content">
              <img
                :src="'/src/images/people/' + generateRandImg() + '.jpeg'"
                :alt="slotProps.data.brand"
              />
              <div class="product-name">{{ slotProps.data.name }}</div>
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
                @click = "purchaseItem()"
                :disabled="slotProps.data.population === 'OUTOFSTOCK'"
              ></PrimeButton>
            </div>
          </div>
        </div>
      </template>
    </DataView>
    <Dialog header="Header" v-model:visible="display" >
      <template #header>
        <h3>Oh, sorry</h3>
      </template>
      You don't have enough Imperial Credits to buy it
      <template #footer>
        <PrimeButton label="Okey" icon="pi pi-check" autofocus @click="display=false" />
      </template>
    </Dialog>
  </div>
  <PaginatorVue
    :rows="10"
    :totalRecords="totalItemsCount"
    v-model:first="offset"
    @page="onPage($event)"
  ></PaginatorVue>
</template>

<script>
import { withScopeId } from "vue";
import { getPeople } from "../api/index.js";
import PreLoader from "../components/Preloader.vue";

export default {
  data() {
    return {
      items: [],
      totalItemsCount: 0,
      preloader: true,
      offset: 0,
      display: false,
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
    purchaseItem() {
      if (!this.$store.state.data) {
        this.$router.push({ name: "auth" });
      } else {
        this.display = true;
      }
    },
    generateRandImg() {
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
