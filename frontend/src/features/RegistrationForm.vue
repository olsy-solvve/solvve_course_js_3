<script>
import axios from "axios";
export default {
  data() {
    return {
      token: localStorage.token,
      login: null,
      password: null
    };
  },
  created() {},
  methods: {
    signup() {
      const signup = "http://localhost:3000/signup";
      axios
        .post(
          signup,
          {
            newUser: {
              id: null,
              login: this.login,
              password: this.password,
            },
          },
          {}
        )
        .then((res) => {
          this.token = res.data.token;
          localStorage.token = res.data.token;
          localStorage.username = res.data.login;
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>

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
        <InputText 
          v-model="login"
          id="email1"
          type="text"
          class="w-full mb-3"
        />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText
          v-model="password" 
          id="password1"
          type="password" 
          class="w-full mb-3" 
        />

        <PrimeButton
          label="Create"
          icon="pi pi-user-plus"
          class="w-full"
          @click="signup()"
        ></PrimeButton>
      </div>
    </div>
  </div>
</template>

<style></style>
