export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  // "BQBBeHIbh7xcDSlLEZjUCfbdHKD4oLHohYs99COAOdUMzoviNU8ih0W91WHSUCBRVqIz0A_xhh-drD_-lUQP1aM-4WKef87TYqe-swbWA0wln33ioF_grfV8Vfn1_Kiv0sK7Z6G-soXQ5nsCCKbJaF2S-zNRF8O5EMZARwjt2TY57lSTuk7A",
  // token: null,
};

const reducer = (state, action) => {
  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
