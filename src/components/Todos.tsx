import { Todo } from "../models/todo";
import { useContext } from "react";
import { TodosContext } from "../context/todos_context";
import SingleTodo from "./SingleTodo";

// // for typescript props, define a prop "type" for this component as such:
// type todosProps = {
//      items: Todo[];
//      onRemoveTodoItem: (id: string) => void;
//      // if you wanted to pass an un-required value, you could just add a question mark after the name:
//      // name?: string
// };

// then, you can destructure it like this:
// const Todos = ({ items, onRemoveTodoItem }: todosProps) => {
const Todos = () => {
     const { items, removeTodoItem } = useContext(TodosContext);

     return (
          <ul
               style={{
                    backgroundColor: "lightblue",
                    padding: "10px",
                    borderRadius: "5px",
               }}
          >
               {items.map((item) => (
                    <SingleTodo
                         key={item.id}
                         text={item.text}
                         //  note: this function is pre-configured to specifically remove any dynamically added Todo item in the array. Other options are to either .bind() it, or simply continue passing "id" down the prop chain to <SingleTodo />. All are acceptable techniques.
                         onRemoveTodoItem={() => removeTodoItem(item.id)}
                    />
               ))}
          </ul>
     );
};
export default Todos;
