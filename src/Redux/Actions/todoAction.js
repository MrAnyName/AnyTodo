import axios from "axios";


export const GET_TODO = "GET_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const ADD_TODO = "ADD_TODO"


export const getListThunk = () =>{
    return async dispatch =>{
        const response = await axios.get(`http://localhost:5001/todo`)
        dispatch (getListThunk())
        dispatch({
            type:GET_TODO,
            payload:response.data
        })
    }
}

export const deleteListThunk = (id) =>{

    return async dispatch =>{
        const response = await axios.delete(`http://localhost:5001/todo/${id}`,)
        dispatch({
            type:DELETE_TODO,
            payload:response.data
        })
        console.log(id)
    }
}

export const addListThunk = (id,name) =>{
    return async dispatch =>{
        const response = await axios.post(`http://localhost:5001/todo/`,{id,name})
        console.log(name)
        dispatch({
            type:ADD_TODO,
            payload:response.data
        })
    }
}