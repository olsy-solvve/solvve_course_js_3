<template>
  <div>
    <DataView :value="items" layout="grid">
      <template #list="slotProps">
        <div class="p-col-12">
          <div class="people-details">
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
          <Panel :header="slotProps.data.name" style="text-align: center">
            <div class="people-detail">
              height: {{ slotProps.data.height }}<br />
              mass: {{ slotProps.data.mass }}<br />
              hair_color: {{ slotProps.data.hair_color }}<br />
              skin_color: {{ slotProps.data.skin_color }}<br />
              eye_color: {{ slotProps.data.eye_color }}<br />
              birth_year: {{ slotProps.data.birth_year }}<br />
              gender: {{ slotProps.data.gender }}
            </div>
          </Panel>
        </div>
      </template>
    </DataView>
  </div>

  <Paginator
    :rows="10"
    :totalRecords="totalItemsCount"
    v-model:first="offset"
    @page="onPage($event)"
  ></Paginator>
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
    const root = "https://swapi.dev/api/people/";
    axios.get(root, {}, {}).then((res) => {
      Object.entries(res.data.results).forEach(([value]) => {
        this.totalItemsCount = res.data.count;
        this.items.push(value);
      });
    });
  },
  methods: {
    onPage(event) {
      const root = `https://swapi.dev/api/people/?page=${event.page + 1}`;
      axios.get(root, {}, {}).then((res) => {
        this.items = [];
        Object.entries(res.data.results).forEach(([value]) => {
          this.totalItemsCount = res.data.count;
          this.items.push(value);
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
