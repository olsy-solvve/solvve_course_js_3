<template>
  <main>
    <br />
    <div>
      <InputText
        v-model="username"
        type="text"
        class="p-inputtext-sm"
        placeholder="usename"
      />
    </div>
    <br />
    <div>
      <InputText
        v-model="password"
        type="text"
        class="p-inputtext-sm"
        placeholder="password"
      />
    </div>
    <br />
    <div><ButtonVue label="Submit" @click="auth()" /></div>
    <br />
    <p v-if="$store.state.data">You are logen in!</p>
  </main>
</template>

<script>
import axios from "axios";
//const auth = "http://localhost:3000/auth";

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

<style></style>
