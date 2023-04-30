type singleTodoProps = {
     text: string;
     onRemoveTodoItem: () => void;
};

const SingleTodo = ({ text, onRemoveTodoItem }: singleTodoProps) => {
     const handleOnClick = () => {
          onRemoveTodoItem();
     };

     return (
          <li
               style={{
                    color: "white",
                    backgroundColor: "purple",
                    padding: "20px",
                    borderRadius: "3px",
               }}
               onClick={handleOnClick}
          >
               {text}
          </li>
     );
};
export default SingleTodo;
