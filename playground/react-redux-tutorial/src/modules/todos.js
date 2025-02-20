import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { increase } from './counter';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

export const toggle = createAction(TOGGLE, (id) => id);
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

export const remove = createAction(REMOVE, (id) => id);
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        // immer 적용
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
//     // [INSERT]: (state, { payload: todo }) => ({
//     //   ...state,
//     //   todos: state.todos.concat(todo),
//     // }),
//     [INSERT]: (state, action) => (
//       console.log('action', action),
//       console.log('action.payload', action.payload),
//       {
//         ...state,
//         todos: state.todos.concat(action.payload),
//       }
//     ),
//     [TOGGLE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initialState
// );

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state, // 불변성을 유지를 해 주어야 합니다.
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

export default todos;
