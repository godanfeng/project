import requests from "./request";

export const login = (params) =>requests({url: '/api/login',method: 'post',params});

export const reg = (params) =>requests({url: '/api/register',method: 'post',params});

export const  reqGetUserInfo = () =>requests({url: '/my/userinfo',method: 'get'});

export const  updateUserInfo = (data) =>requests({url: '/my/userinfo',method: 'post',data});

export const  reqLogOut = (d) =>requests({url: '',method: 'get'});

export const  updateAvatar = (data) =>requests({url: '/my/update/avatar',method: 'post',data});

export const  banner = () =>requests({url: '/api/banner',method: 'get'});

export const  article = () =>requests({url: '/api/article',method: 'get'});

export const  show = () =>requests({url: '/api/show',method: 'get'});

export const  maind = () =>requests({url: `/api/detail`,method: 'get'});

export const  detail = (id) =>requests({url: `/api/singleDetail/${id}`,method: 'get'});

export const  extend = () =>requests({url: `/api/extend`,method: 'get'});

export const  collect = (data) =>requests({url: `/api/collect`,method: 'post', data});

export const  getCollect = (userId) =>requests({url: `/api/getCollect/${userId}`,method: 'get'});

export const  del = (id,userId) =>requests({url: `/api/delete/${id}/${userId}`,method: 'get'});

export const  search = (key) =>requests({url: `/api/search/${key}`,method: 'get'});

