import React, {useEffect, useState} from 'react';
import style from "./style.module.css"
import {useDispatch} from "react-redux";
import {addListThunk} from "../../Redux/Actions/todoAction";

const ToAdd = () => {
    const num = Math.floor(Math.random() * 1000)
    const [change,setChange] = useState()
    useEffect(()=>{

    },[])

    const dispatch = useDispatch()
    return (
        <div className={style.allAdd}>
            <input placeholder={'add'} className={style.inp} value={change} type="text" onChange={(e)=>{
                setChange(e.target.value)
            }}/>
            <button onClick={()=>{
                if(change != ''){dispatch(addListThunk(num,change))
                    setChange('')}else{
                    alert('add list')
                }

            }}>TO ADD</button>
        </div>
    );
};

export default ToAdd;