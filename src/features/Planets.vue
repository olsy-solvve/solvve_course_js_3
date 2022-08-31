<template>
  <Preloader v-bind:preloader="preloader"/>
  <div>

    <DataView :value="items" layout="grid">
      <template #list="slotProps">
        <div class="p-col-12">
          <div class="planets-details">
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
      </template>
      <template #grid="slotProps">
        <div style="padding: 0.5em" class="p-col-12 p-md-3">
          <PanelVue :header="slotProps.data.name" style="text-align: center">
            <div class="planets-detail">
              rotation_period: {{ slotProps.data.rotation_period }}<br />
              orbital_period: {{ slotProps.data.orbital_period }}<br />
              diameter: {{ slotProps.data.diameter }}<br />
              climate: {{ slotProps.data.climate }}<br />
              gravity: {{ slotProps.data.gravity }}<br />
              terrain: {{ slotProps.data.terrain }}<br />
              surface_water: {{ slotProps.data.surface_water }}<br />
              population: {{ slotProps.data.population }}<br />
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
        const root = "https://swapi.dev/api/planets/";
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
        async onPage(event) {
            
            const root = `https://swapi.dev/api/planets/?page=${event.page + 1}`;
            await axios.get(root, {}, {}).then((res) => {
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

<style scoped>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline;
}

div {
  font-size: 12px;
  display: flex;
  display: inline-block;
  align-items: center;
}
</style>
