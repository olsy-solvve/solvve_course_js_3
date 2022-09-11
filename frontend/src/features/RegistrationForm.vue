<script></script>

<template>
  <div class="flex justify-content-center mt-5">
    <div
      class="surface-card p-4 shadow-2 border-round w-full lg:w-6 my-auto mx-auto"
    >
      <div class="text-center mb-5">
        <div class="text-900 text-5xl font-bold">Create your Account</div>
        <div class="text-500 text-2xl font-normal">
          May the Force be with you
        </div>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText id="password1" type="password" class="w-full mb-3" />

        <PrimeButton
          label="Create"
          icon="pi pi-user-plus"
          class="w-full"
        ></PrimeButton>
      </div>
    </div>
  </div>
</template>

<style></style>
