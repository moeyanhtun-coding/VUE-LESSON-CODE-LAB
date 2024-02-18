<template>
  <div>
    <h1>this is home page</h1>
    <h2>{{ $store.state.myName }}</h2>
    <li class="text-success" v-for="(f, index) in myFriList()" :key="index">
      <h6>{{ f }}</h6>
    </li>
    <p>{{ getUserInfo }}</p>
    <p>{{ getMyName }}</p>
    <p>{{ jobDone }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  methods: {
    myFriList() {
      return this.$store.state.myFri;
    },
  },
  //   computed: mapState({ getMyName: (state) => state.myName }),
  computed: {
    ...mapState(["myName", "myFri"]),
    ...mapGetters(["getUserInfo", "jobDone"]),
  },
};
</script>
