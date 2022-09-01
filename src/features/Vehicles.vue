<template>
  <Preloader v-bind:preloader="preloader"/>
  <div>
    <DataView :value="items" layout="grid">
      <!-- <template #list="slotProps">
        <div class="p-col-12">
          <div class="vehicles-details">
            <div>
              <div class="p-grid">
                <div class="p-col-12">
                  Name: <b>{{ slotProps.data.name }}</b>
                </div>
                <div class="p-col-12">
                  Year: <b>{{ slotProps.data.year }}</b>
                </div>
                <div class="p-col-12">
                  Vin: <b>{{ slotProps.data.vin }}</b>
                </div>
                <div class="p-col-12">
                  Color: <b>{{ slotProps.data.color }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template> -->
      <template #grid="slotProps">
        <div style="padding: 0.5em 0" class="col-12 md:col-4 lg:col-3 xs:col-6">
          <PanelVue :header="slotProps.data.name" style="text-align: center">
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
import axios from "axios";
import Preloader from "../components/Preloader.vue";
export default {
  name: "App",
  data() {
    return {
      items: [],
      totalItemsCount: 0,
      offset: 20,
      preloader: null,
    };
  },

  created() {
    const root = "https://swapi.dev/api/vehicles/";
    axios.get(root, {}, {}).then((res) => {
      this.preloader = false;
      Object.entries(res.data.results).forEach(([key, value]) => {
        this.totalItemsCount = res.data.count;
        this.items.push(value);
        this.key = key;
      });
    }).then(this.preloader = true);
  },
  methods: {
    onPage(event) {
      const root = `https://swapi.dev/api/vehicles/?page=${event.page + 1}`;
      axios.get(root, {}, {}).then((res) => {
        this.preloader = false;
        this.items = [];
        Object.entries(res.data.results).forEach(([key, value]) => {
          this.totalItemsCount = res.data.count;
          this.items.push(value);
          this.key = key;
        });
      }).then(this.preloader = true);
    },
  },
  components: { Preloader }
};
</script>

<style></style>
