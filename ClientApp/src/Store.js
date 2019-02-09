import { createStore } from 'easy-peasy';

// Initial state
const reducer = {
  stocks: {
    items: [],
    // 👇 define actions directly on your model
    set: (state, payload) => ({ ...state, items: payload }),
    add: (state, payload) => {
      const newState = state;
      newState.items.push(payload);
      return newState;
    },
    edit: (state, payload) => {
      const newState = state.items.map(obj => obj.id === payload.id ? payload : obj);
      return { ...state, items: newState };
    },
  },
  prices: {
    items: [],
    set: (state, payload) => ({ ...state, items: payload }),
    add: (state, payload) => {
      const newState = state;
      newState.items.push(payload);
      return newState;
    }
  }
};

// Create store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
