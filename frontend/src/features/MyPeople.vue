<template>
  <div>
    <PreLoader :preloader="preloader" />
    <DataView :value="items" layout="grid">
      <template #grid="slotProps">
        <div style="padding: 0.5em 0" class="col-12 md:col-4 lg:col-3 xs:col-6">
          <PanelVue :header="slotProps.data.name" style="text-align: center">
            <img
              :src="'/src/images/people/' + generateRandImg() + '.jpeg'"
              :alt="slotProps.data.brand"
            />
            <div class="people-detail">
              Name: {{ slotProps.data.name }}<br />
              height: {{ slotProps.data.height }}<br />
              mass: {{ slotProps.data.mass }}<br />
              hair_color: {{ slotProps.data.hair_color }}<br />
              skin_color: {{ slotProps.data.skin_color }}<br />
              eye_color: {{ slotProps.data.eye_color }}<br />
              gender: {{ slotProps.data.gender }}<br />
              birth_year: {{ slotProps.data.birth_year }}<br />
            </div>
          </PanelVue>
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

<style></style>
