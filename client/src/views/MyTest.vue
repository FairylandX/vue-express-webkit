<template>
  <div>
    <h1>{{ this.msg }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyTest",
  data() {
    return {
      msg: "",
    };
  },
  created() {
    axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.msg = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
}
</script>

<style scoped>

</style>