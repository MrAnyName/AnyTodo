import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteListThunk, getListThunk} from "../../Redux/Actions/todoAction";
import style from './style.module.css'

const List = () => {
const todo = useSelector(state => state.todoReducer.todo)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getListThunk())
    },[])

    return (
        <div className={style.headList}>


            {todo.map(({id,name})=>{
                return <div className={style.lists} key={id}>
                    <input value={name} type="text"/>
                    <button onClick={()=>{
                        dispatch(deleteListThunk(id))
                    }
                    }>delete</button>

                </div>
            })}

        </div>
    );
};

export default List;