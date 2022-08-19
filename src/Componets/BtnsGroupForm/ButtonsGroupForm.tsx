import React from 'react';
import st from './ButtonsGroupForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {incrementCounterAC, setCounterAC} from "../../Redux/counterReducer";
import {RootReducerTypes} from "../../Redux/ReduxStore";

import {isEditAC} from "../../Redux/editStatusReducer";
export const ButtonsGroupForm = () => {
    const dispatch = useDispatch()
    const {counter,minMax,isEdit} = useSelector<RootReducerTypes,RootReducerTypes>(state => state)
    const handlerOnClickSetSetting = () => {
        if(isEdit){
            dispatch(isEditAC())
            dispatch(setCounterAC(counter > minMax.min ? counter : minMax.min))
        } else {
            dispatch(isEditAC())
        }
    }
    console.log('BGF Render')

    return (
        <div className={st.container}>
            <div>
                <button
                    className={st.btn}
                    disabled={counter >= minMax.max || isEdit}
                    onClick={()=>{dispatch(incrementCounterAC())}}
                >Inc
                </button>
                <button
                    className={st.btn}
                    disabled={counter !== minMax.max || isEdit}
                    onClick={()=>{dispatch(setCounterAC(minMax.min))}}
                >Res
                </button>
                <button
                    className={st.btn}
                    onClick={handlerOnClickSetSetting}
                >Set
                </button>
            </div>
        </div>
    );
};
