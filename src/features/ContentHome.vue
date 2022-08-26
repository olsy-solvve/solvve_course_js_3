<template>
  <main>Home Page</main>

  <CarouselVue
    :value="cars"
    :numVisible="4"
    :numScroll="3"
    :responsiveOptions="responsiveOptions"
  >
    <template #header>
      <h2>Star Wars Shop</h2>
    </template>
    <template #item="slotProps">
      <div class="car-item">
        <div class="car-content">
          <div>
            <img
              :src="'demo/images/car/' + slotProps.data.brand + '.png'"
              :alt="slotProps.data.brand"
            />
          </div>
          <div>
            <div class="car-title">{{ slotProps.data.brand }}</div>
            <div class="car-subtitle">
              {{ slotProps.data.year }} | {{ slotProps.data.color }}
            </div>

            <div class="car-buttons">
              <Button icon="pi pi-search" class="p-button-secondary" />
              <Button icon="pi pi-star-fill" class="p-button-secondary" />
              <Button icon="pi pi-cog" class="p-button-secondary" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </CarouselVue>
</template>

<script>
export default {
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
