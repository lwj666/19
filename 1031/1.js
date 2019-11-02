/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2019-10-31 17:23:58
 * @LastEditTime: 2019-11-01 11:28:18
 * @LastEditors: winki
 */
applicationCache.model({
  namespace:'todoList',/* 管理维度划分 */
  state:[],/* 管理数据状态 */
  /* 管理异步操作 */
  effects:{
    *query({ _ },{put,call}){
      const rsp = yield call(queryTodoListFromServer);
      const todoList = rsp.data;
      yield put({type:'save',payload:todoList});
    },
  },
  /* 管理同步操作 */
  reducers:{
    save(state,{...state,todoList}){
      return [...state,todoList];
    },
  },
});