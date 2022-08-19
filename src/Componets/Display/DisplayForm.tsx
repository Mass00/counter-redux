import React, {useState} from 'react';
import st from './DisplayForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerTypes} from "../../Redux/ReduxStore";
import {setMaxAC, setMinAC} from "../../Redux/minMaxReducer";
export const DisplayForm = () => {
    const dispatch = useDispatch()
    const {counter,minMax,isEdit} = useSelector<RootReducerTypes,RootReducerTypes>(state => state)
    const handlerOnChangeMaxValue = (e:React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setMaxAC(e.currentTarget.valueAsNumber))
    const handlerOnChangeMinValue = (e:React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setMinAC(e.currentTarget.valueAsNumber))

    console.log('Display Render')
    return (
        <div className={st.container}>
            { !isEdit
                ?
                    <div>
                        <h2>{counter}</h2>
                    </div>
                :
                    <div>
                        <span style={{display: 'inline-block', width:'15%'}}>Max</span>
                        <input
                            style={{width : '85%',marginBottom: '10px'}}
                            type="number"
                            value={minMax.max}
                            onChange={handlerOnChangeMaxValue}
                        />
                        <span style={{display: 'inline-block', width:'15%'}}>Min</span>
                        <input
                            style={{width : '85%'}}
                            type="number"
                            value={minMax.min}
                            onChange={handlerOnChangeMinValue}
                        />
                    </div>
            }
        </div>
    );
};

