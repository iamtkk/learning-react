import React from 'react';
import { useSelector, connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

// const TodosContainer = () => {
//   const { input, todos } = useSelector(({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos
//   }));

//   const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
//     [changeInput, insert, toggle, remove],
//     []
//   );

//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={onChangeInput}
//       onInsert={onInsert}
//       onToggle={onToggle}
//       onRemove={onRemove}
//     />
//   );
// };

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

// export default React.memo(TodosContainer);
export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
