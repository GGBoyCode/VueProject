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
//获取文章数目
export const getArticleCount = params => get('/article/count', params);
//添加评论
export const addComment = params => post('/comment/add', params);
//获取评论信息
export const getComment = params => post('/comment/get', params)
//获取评论数
export const getCommentCount = params => post('/comment/count', params)
//获取商品
export const getAllWare = params => post('/ware', params)
//获取指定商品
export const getWareById = params => post('/ware/get', params)
//获取购物车商品
export const getWareByCart = params => get('/shoppingCart/get', params)
//删除购物车商品
export const deleteWareByCart = params => post('/shoppingCart/delete', params)
//添加进入购物车
export const addWareToCart = params => post('/shoppingCart/add', params)