import { createStore } from 'vuex'

export default createStore({
  state: {
    myName : "Moe Yan Htun",
    myFri : [
      "Moe Pyae Hein",
      "Aung Thant",
      "Aung Paing Phyo",
      "Myint Mo"
    ],
    userInfo:[
      {
        id:1,
        name:'Aung Aung',
        job : 'Programmer',
        workingHr : 10,
        jobDone : true
      },{
        id:2,
        name:'Kyaw Aung',
        job : 'Developer',
        workingHr : 10,
        jobDone : false
      },{
        id:3,
        name:'Aung Myat',
        job : 'Full Stack',
        workingHr : 10,
        jobDone : true
      },

    ]
  },
  getters: {
    getUserInfo: state => state.userInfo.length,
    jobDone : state => state.userInfo.filter(x=>x.jobDone === true).length
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
