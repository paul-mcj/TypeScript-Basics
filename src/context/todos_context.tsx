import React, { useState } from "react";
import createTodo, { Todo } from "../models/todo";

// note: this type alias is used to define multiple generic function types
type TodosContextObj = {
     items: Todo[];
     // note: notice how the type definition of the addTodoItem function returns void here, but it "runs" an empty function as the concrete function definition in the TodosContext (just remember that TypeScript differs in defining types and describing values)
     addTodoItem: (text: string) => void;
     removeTodoItem: (id: string) => void;
};

// note: this is the modern way to define "children" in any component
type ProviderProps = {
     children?: React.ReactNode;
};

// note: createContext function can allow you to describe the generic types of desired values for the context object you want to use (in this case, it should be defined by the TodosContextObj)
export const TodosContext = React.createContext<TodosContextObj>({
     items: [],
     addTodoItem: () => {},
     removeTodoItem: (id: string) => {},
});

// note: the Provider takes in children
const TodosContextProvider = ({ children }: ProviderProps) => {
     //note: with useState, we must specify the type of values that will be in the array -- in this case, we want Todo objects (as defined in the /models/todo file):
     const [todos, setTodos] = useState<Todo[]>([]);

     const handleOnAddTodo = (text: string) => {
          const newTodo = createTodo(text);
          setTodos((prev) => [...prev, newTodo]);
     };

     const handleOnRemoveTodo = (id: string) => {
          const tempArr = todos.filter((item) => item.id !== id);
          setTodos(() => tempArr);
     };

     // note: we want to make sure the "value object" that will be passed to the Provider component is of the same type defined in the TodosContext (so lets use the definition here):
     const contextValue: TodosContextObj = {
          items: todos,
          addTodoItem: handleOnAddTodo,
          removeTodoItem: handleOnRemoveTodo,
     };

     return (
          <TodosContext.Provider value={contextValue}>
               {children}
          </TodosContext.Provider>
     );
};

export default TodosContextProvider;
