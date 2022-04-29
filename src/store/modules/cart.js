// https://blog.csdn.net/m0_62598303/article/details/123833082
const state = {
  list: [],
  selectList: []
}

const mutations = {
  CART_LIST (state, cartArr) {
    state.list = cartArr;
    cartArr.forEach((v) => {
      state.selectList.push(v.id);
    });
  },
  //全选
  CHECK_ALL (state) {
    state.selectList = state.list.map((v) => {
      v.checked = true;
      return v.id;
    });
  },
  //全不选
  UN_CHECK_ALL (state) {
    state.list.forEach((v) => {
      v.checked = false;
    });
    state.selectList = [];
  },
  //单选
  CHECK_ITEM (state, index) {
    console.log(state.list[index].id, state.selectList);
    let id = state.list[index].id;
    let i = state.selectList.indexOf(id);
    //能在selectList 找到对应的id  ,就删除
    if (i > -1) {
      // console.log(state.selectList);
      return state.selectList.splice(i, 1);
    }
    //如果之前没有选 中，就给  selectList添加一个id进去
    state.selectList.push(id);
  },
  //删除
  delGoods(state) {
    state.list = state.list.filter((v) => {
      return state.selectList.indexOf(v.id) == -1;
    });
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
