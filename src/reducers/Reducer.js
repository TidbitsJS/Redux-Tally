export default function (state, action) {
  switch (action.type) {
    case "SET_ACTIVE_SESSION":
      return {
        ...state,
        activeSession: action.payload,
      };

    case "INCREASE_COUNTER":
      const activeSession = action.payload.toLowerCase();
      return {
        ...state,
        [activeSession]: state[activeSession] + 1,
      };

    case "DECREASE_COUNTER":
      const session = action.payload.toLowerCase();
      return {
        ...state,
        [session]: Math.max(0, state[session] - 1),
      };

    default:
      return state;
  }
}
