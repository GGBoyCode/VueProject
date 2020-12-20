import {get, post} from './http.js'

//获取轮播图
export const getCarousels = params => get("/carousel/get", params);
//登录
export const signIn = params => post("/signIn", params);
//注册
export const signUp = params => post('/signUp', params);
