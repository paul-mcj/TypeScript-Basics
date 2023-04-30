// here we can describe what a "Todo" should be, and export it. Typescript allows the creation of an interface, which is kinda like defining a JS class -- its simply a way to define the "shape" of an object. Remember: this is just to define TYPES!
export interface Todo {
     id: string;
     text: string;
}

// if we want to make a new Todo object from that above interface, it needs to be done via either classes or some sore of function that can return an object that conforms to the interface (as is the case below we want the function to return a Todo object):
const createTodo = (text: string): Todo => {
     return { id: Math.random().toString(), text };
};

export default createTodo;
