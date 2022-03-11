const defaultStore = {
  num: 1,
};

const data = (state = defaultStore, action) => {
  switch (action.type) {
    case "add":
      state.num += 1;
      return JSON.parse(JSON.stringify(state));
    default:
      break;
  }

  return state;
};

export default data;
