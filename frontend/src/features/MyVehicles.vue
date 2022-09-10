<template>
  <div>
    <PreLoader :preloader="preloader" />
    <DataView :value="items" layout="grid">
      <template #grid="slotProps">
        <div style="padding: 0.5em 0" class="col-12 md:col-4 lg:col-3 xs:col-6">
          <PanelVue :header="slotProps.data.name" style="text-align: center">
            <img
              :src="
                '/src/assets/images.jpg/vehicles/' + generateRandImg() + '.jpg'
              "
              :alt="slotProps.data.brand"
            />
            <div class="people-detail">
              model: {{ slotProps.data.model }}<br />
              manufacturer: {{ slotProps.data.manufacturer }}<br />
              cost_in_credits: {{ slotProps.data.cost_in_credits }}<br />
              length: {{ slotProps.data.length }}<br />
              max_atmosphering_speed: {{ slotProps.data.max_atmosphering_speed
              }}<br />
              crew: {{ slotProps.data.crew }}<br />
              passengers: {{ slotProps.data.passengers }}<br />
              cargo_capacity: {{ slotProps.data.cargo_capacity }}<br />
              consumables: {{ slotProps.data.consumables }}<br />
              vehicle_class: {{ slotProps.data.vehicle_class }}<br />
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
import { getVehicles } from "../api/index.js";
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
    getVehicles({ page: 1 })
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
      return Math.floor(Math.random() * 6);
    },
    onPage(event) {
      this.preloader = true;
      this.items = [];
      getVehicles({ page: event.page + 1 })
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
