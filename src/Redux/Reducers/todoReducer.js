import { GET_TODO} from "../Actions/todoAction";


const initialState = {
    todo:[

    ]
}


const todoReducer = (state=initialState,action)=>{
    switch (action.type){
        case GET_TODO :
            return{
                todo :action.payload
            }


        default : return state

    }
}

export default todoReducer