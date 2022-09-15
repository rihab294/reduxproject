import { ADD, DELETE, DONE, EDIT, SEARCHDONE, SEARCHNOTDONE } from "../types"

export const toggleDone=(id)=>{
    return {
        type: DONE ,
        payload: id,
    };
};
export const Deletetodo=(id)=>{
    return {
        type: DELETE ,
        payload: id,
    };
};
export const Edittodo=(text, id)=>{
    return {
        type: EDIT ,
        payload: {
            text,
            id
        }
    };
}
export const Addtodo=(text)=>{
    return {
        type: ADD ,
        payload: text
    };
}
export const SearchDone=()=>{
    return {
        type: SEARCHDONE ,
    };
}
export const SearchNotDone=()=>{
    return {
        type: SEARCHNOTDONE ,
    };
}