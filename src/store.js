import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
        name: 'kim',
        age: 20,
        likes: [30, 20, 24],
        more: {

        },
    }
  },
  mutations: {
    changeName(state) {
        state.name = 'park'
    },
    IncreaseAge(state, payload) {
        state.age += payload
    },
    CheckLike(state, payload) {
        if(payload[0]){
            state.likes[payload[1]] += 1;
        }else{
            state.likes[payload[1]] -= 1;
        }
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    //ajax 요청하는 곳
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        console.log(a.data);
        context.commit('setMore', a.data);
      });
    },
  },
})

export default store