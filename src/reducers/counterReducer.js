import { actionType as counterActionType } from "../actions/counterActions";

const initialState = {
  count: 0,
};

// 前回の状態（state）とactionオブジェクトを受け取って次の状態を返す
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case counterActionType.add:
      return {
        count: state.count + 1,
      };
    case counterActionType.addArbitrary:
      return {
        count: state.count + action.payload.count,
      };
    // 動かなかった原因
    // 初期状態のときにactionは渡されないので状態をそのまま返す必要がある
    default:
      return state;
  }
}
