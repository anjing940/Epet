import {RECEIVE_FEN,RECEIVE_BRAND,RECEIVE_HOME,RECEIVE_WHOLE} from "./mutation-types"
export default {
  [RECEIVE_FEN](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state, {brand}) {
    state.brand = brand
  },
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_WHOLE](state,{whole}){
    state.whole = whole
  }
}
