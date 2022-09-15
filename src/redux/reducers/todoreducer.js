import { ADD, DELETE, DONE, EDIT, SEARCHDONE, SEARCHNOTDONE } from "../types";

const initialState={
   todos: 
   [ 
    {text: "learn html", isdone: false, id: 1 },
    {text: "learn css", isdone: false, id: 2},
]
};

function todoreducer(state= initialState, action) {
   switch(action.type){
    case DONE :
return {
    ...state,
    todos: state.todos.map(todo=>todo.id === action.payload ? {...todo, isdone: !todo.isdone } : todo),
   };
   case DELETE :
return {
    ...state, 
    todos : state.todos.filter(todo=>todo.id !== action.payload)
    }; 
    case EDIT :
return {
...state,
todos : state.todos.map(todo=>todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo),
        };
    case ADD : 
return {
...state, 
todos : [...state.todos, {text: action.payload, isdone: false, id: Math.random()}]
        }
    case SEARCHDONE : 
return {
...state, 
todos : state.todos.filter((todo)=>todo.isdone === true)
        }
    case SEARCHNOTDONE : 
return {
...state, 
todos : state.todos.filter((todo)=>todo.isdone === false)
        }

default :
       return state;
}
}

export default todoreducer;