const TODOS_STRORAGE_KEY = "TODOS";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STRORAGE_KEY)) || [];
  },
  set(todos) {
    localStorage.setItem(TODOS_STRORAGE_KEY, JSON.stringify(todos));
  },
};
