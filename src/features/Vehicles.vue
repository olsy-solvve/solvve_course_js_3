<template>
  <div>
    <DataView :value="items" layout="grid">
      <template #list="slotProps">
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
      </template>
      <template #grid="slotProps">
        <div style="padding: 0.5em" class="p-col-12 p-md-3">
          <PanelVue :header="slotProps.data.name" style="text-align: center">
            <div class="people-detail">
              model: {{ slotProps.data.model }}<br />
              manufacturer: {{ slotProps.data.manufacturer }}<br />
              cost_in_credits: {{ slotProps.data.cost_in_credits }}<br />
              length: {{ slotProps.data.length }}<br />
              max_atmosphering_speed: {{ slotProps.data.max_atmosphering_speed }}<br />
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
export default {
  name: "App",
  data() {
    return {
      items: [],
      totalItemsCount: 0,
      offset: 20,
    };
  },

  created() {
    const root = "https://swapi.dev/api/vehicles/";
    axios.get(root, {}, {}).then((res) => {
      Object.entries(res.data.results).forEach(([key, value]) => {
        this.totalItemsCount = res.data.count;
        this.items.push(value);
        this.key = key;
      });
    });
  },
  methods: {
    onPage(event) {
      const root = `https://swapi.dev/api/vehicles/?page=${event.page + 1}`;
      axios.get(root, {}, {}).then((res) => {
        this.items = [];
        Object.entries(res.data.results).forEach(([key, value]) => {
          this.totalItemsCount = res.data.count;
          this.items.push(value);
          this.key = key;
        });
      });
    },
  },
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
