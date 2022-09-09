<script>
  import axios from "axios";
  export default {
    data() {
      return {
        token: localStorage.token,
        username: null,
        password: null,
        authStatus: null,
      };
    },
  
    created() {},
  
    methods: {
      auth() {
        const auth = "http://localhost:3000/auth";
        axios
          .post(
            auth,
            {
              auth: {
                username: this.username,
                password: this.password,
              },
            },
            {}
          )
          .then((res) => {
            this.token = res.data.token;
            localStorage.token = res.data.token;
          })
          .then(() => {
            window.location.reload();
          });
      },
    },
  };
  </script>
  

<template>
  <div class="flex justify-content-center mt-5">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 my-auto mx-auto">
      <div class="text-center mb-5">
        <div class="text-900 text-5xl font-bold">Sign In</div>
        <div class="text-500 text-2xl font-normal mb-2">
          May the Force be with you
        </div>
        >
        <span class="text-600 font-medium line-height-3"
          >Don't have an account?</span
        >
        <router-link to="/signup" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >Create today!
        </router-link>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText v-model="username" id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText v-model="password" id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <a
            class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
            >Forgot password?</a
          >
        </div>

        <PrimeButton
          label="Sign In"
          icon="pi pi-user"
          class="w-full" @click="auth()"
        ></PrimeButton>
      </div>
    </div>
  </div>
</template>

<style></style>
