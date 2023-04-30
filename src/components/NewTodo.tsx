import { useRef, useContext } from "react";
import { TodosContext } from "../context/todos_context";

type newTodoProps = {
     // note: this function isn't returning anything, so it will be void
     onAddTodoItem: (text: string) => void;
};

// const NewTodo = ({ onAddTodoItem }: newTodoProps) => {
const NewTodo = () => {
     const { addTodoItem } = useContext(TodosContext);

     // note: useRef types should be explicitly defined with their generic interfaces (ie. look at MDN and see that the <HTMLInputElement> is what we want, since this ref is for an input element). useRef and typescript also wants to be explicitly told what the default value is for the ref -- in most cases it will simply be null.
     const textInputRef = useRef<HTMLInputElement>(null);

     // note: if you ever need to find exactly what event type you need and don't wanna spend time googling, you can simply put this whole function inline the JSX and VSCode will allow you to see the types needed when you hover over them!
     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          // note: if you are positive that a value will NOT be null, you can use an exclamation mark instead of a question mark for optional chaining:
          const enteredText = textInputRef.current!.value;
          addTodoItem(enteredText);
     };

     return (
          <form onSubmit={handleSubmit}>
               <label htmlFor="text">
                    <input
                         type="text"
                         name="text"
                         id="text"
                         ref={textInputRef}
                    />
                    <button>Add Todo</button>
               </label>
          </form>
     );
};
export default NewTodo;
