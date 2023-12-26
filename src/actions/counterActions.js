// actionはtypeプロパティをもつオブジェクト。それ以上でも以下でもない。ほかにreducerで利用したい値がプロパティとして含まれていることもある。

export const actionType = {
  add: "add-one",
  addArbitrary: "add-arbitrary",
};

export const actionCreator = {
  add: () => ({ type: actionType.add }),
  addArbitrary: (val) => ({ type: actionType.addArbitrary, payload: { count: val } }),
};
