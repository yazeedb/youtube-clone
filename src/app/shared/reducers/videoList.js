const initialState = {
  videos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIDEO_LIST':
      return { ...state, videos: action.list };

      default:
        return state;
  }
};
