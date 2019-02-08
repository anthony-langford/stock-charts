import { createStore } from 'easy-peasy';

// Initial state
const reducer = {
  stocks: {
    items: [],
    // 👇 define actions directly on your model
    set: (state, payload) => {
      // do simple mutation to update state, and we make it an immutable update
      state.items = (payload);
      // (you can also return a new immutable instance if you prefer)
    },
    add: (state, payload) => {
      state.items.push(payload);
    }
  },
  prices: {
    items: [],
    set: (state, payload) => {
      state.items = (payload);
    },
    add: (state, payload) => {
      state.items.push(payload);
    }
  }
};

// Create store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
