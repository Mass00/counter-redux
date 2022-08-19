export type MinMaxReducerType = {
    min: number
    max: number
}
const initialState:MinMaxReducerType = {min: 0, max: 5}
type finalMinMaxReducerActionType = setMinACTypes | setMaxACTypes
export const MinMaxReducer = (state: MinMaxReducerType = initialState, action: finalMinMaxReducerActionType):MinMaxReducerType => {
    switch (action.type){
        case "SET_MIN": {
            return {...state,min: action.payload.min}
        }
        case "SET_MAX":{
            return {...state,max: action.payload.max}
        }
        default: return state
    }

}
type setMinACTypes = ReturnType<typeof setMinAC>
export const setMinAC = (min: number) => {
    return {
        type: 'SET_MIN',
        payload: {
            min
        }
    } as const
}
type setMaxACTypes = ReturnType<typeof setMaxAC>
export const setMaxAC = (max: number) => {
    return {
        type: 'SET_MAX',
        payload: {
            max
        }
    } as const
}
