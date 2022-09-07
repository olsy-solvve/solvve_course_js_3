<script></script>

<template>
  <div class="flex mx-auto justify-content-center mt-5">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 my-auto">
      <div class="text-center mb-5">
        <div class="text-900 text-5xl font-bold">Welcome Back</div>
        <div class="text-500 text-2xl font-normal mb-2">May the Force be with you</div>>
        <span class="text-600 font-medium line-height-3"
          >Don't have an account?</span
        >
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >Create today!</a
        >
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <a
            class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
            >Forgot password?</a
          >
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
      </div>
    </div>
  </div>
</template>

<style></style>
