import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./context/todos_context";

function App() {
     return (
          <TodosContextProvider>
               <div
                    style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         width: "50%",
                    }}
               >
                    {/* <NewTodo onAddTodoItem={handleOnAddTodo} /> */}
                    {/* since items is a mandatory prop in the Todos component, it needs to be explicity passed a value*/}
                    {/* <Todos items={todos} onRemoveTodoItem={handleOnRemoveTodo} /> */}
                    <NewTodo />
                    <Todos />
               </div>
          </TodosContextProvider>
     );
}

export default App;
