<template>
  <div>
    <h1>this is home page</h1>
    <h2>{{ $store.state.myName }}</h2>
    <li class="text-success" v-for="(f, index) in myFriList()" :key="index">
      <h6>{{ f }}</h6>
    </li>
    <p>{{ getUserInfo }}</p>
    <p>{{ jobDone }}</p>
    <button @click="alertMyName()">Call Alert</button>

    <div class="d-flex">
      <input
        class="form-control"
        type="text"
        v-model="myName"
        v-on:keyup.enter="changeInputName()"
      />
      <button class="btn btn-dark" @click="changeInputName()">Enter</button>
    </div>
    <p class="text-success">{{ $store.state.myName }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      myName: "",
    };
  },
  methods: {
    myFriList() {
      return this.$store.state.myFri;
    },
    alertMyName() {
      console.log(this.$store.dispatch("changeName"));
      console.log(this.$store.state.myName);
    },
    changeInputName() {
      this.$store.dispatch("changeMyName", this.myName);
      this.myName = "";
    },
  },
  //   computed: mapState({ getMyName: (state) => state.myName }),
  computed: {
    ...mapState(["myName", "myFri"]),
    ...mapGetters(["getUserInfo", "jobDone"]),
  },
};
</script>
