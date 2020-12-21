import {get, post} from './http.js'

//获取轮播图
export const getCarousels = params => get("/carousel/get", params);
//登录
export const signIn = params => post("/signIn", params);
//注册
export const signUp = params => post('/signUp', params);
//获取用户信息
export const getUserInfo = params => get('/user/information', params);
//更新用户信息
export const updateUserInfo = params => post('/user/update/information', params);