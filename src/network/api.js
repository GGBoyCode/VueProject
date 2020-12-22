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
//添加文章
export const addArticle = params => post('/article/add', params);
//获取全部文章
export const getArticle = params => get('/article/all', params);
//根据id获取文章
export const getArticleById = params => get('/article/get', params);
//添加评论
export const addComment = params => post('/comment/add', params);