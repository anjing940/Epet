import {reqHome,reqfenlei,reqbrand,reqwhole} from "../api"
import {RECEIVE_FEN,RECEIVE_BRAND,RECEIVE_HOME,RECEIVE_WHOLE} from "./mutation-types"
export default {
  async getTypes({commit}, callback){
    const result = await reqfenlei()
    commit(RECEIVE_FEN,{categorys:result.data})
    callback && callback()
  },
  async getBrand({commit}){
    const result = await reqbrand()
    commit(RECEIVE_BRAND,{brand:result.data})
  },
  async getHome({commit},callback){
    const result = await reqHome()
    commit(RECEIVE_HOME,{home:result.data})
    callback && callback()
  },
  async getWhole({commit},callback){
    const result = await reqwhole()
    commit(RECEIVE_WHOLE,{whole:result.data})
    callback && callback()
  }
}
