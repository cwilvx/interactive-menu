<template>
  <div class="adminloginmodal">
    <div class="modalbody rounded">
      <h1 class="t-center">Admin</h1>
      <h4 class="t-center">Can i please see some id?</h4>
      <form>
        <label for="adminusername">Username</label>
        <input
          type="text"
          id="adminusername"
          name="adminusername"
          v-model="adminusername"
        />
        <label for="adminpassword">Password</label>
        <input
          type="password"
          id="adminpassword"
          name="adminpassword"
          v-model="adminpassword"
        />
        <!-- <br> -->
        <button type="submit" @click.prevent="login">Login</button>
      </form>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { adminLogin, validateSession, logout } from "@/data/fetchers";

const adminusername = ref("");
const adminpassword = ref("");

const emit = defineEmits<{
  (event: "authOkay"): void;
}>();

const login = () => {
  collectAdminLoginData().then((data) => {
    adminLogin(data.username, data.password).then((status: number) => {
      if (status === 200) {
        emit("authOkay");
        return;
      }

      if (status === 406) {
        alert("Wrong password");
        adminpassword.value = "";
        return;
      }

      if (status === 401) {
        alert("Wrong username or password");
        adminusername.value = "";
        adminpassword.value = "";
      }
    });
  });
};

async function textToSha256(data: string) {
  const utf8 = new TextEncoder().encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

async function collectAdminLoginData() {
  const adminLoginData = {
    username: adminusername.value,
    password: await textToSha256(adminpassword.value),
  };

  return adminLoginData;
}
</script>

<style lang="scss">
.adminloginmodal {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $theme;
  top: 0;
  left: 0;

  .modalbody {
    background: $white;
    width: 30rem;
    margin: 5rem auto;
    padding: 2rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.568), 0 0 5rem rgba(0, 0, 0, 0.425);
  }

  button {
    margin-top: 1rem;
  }
}
</style>
