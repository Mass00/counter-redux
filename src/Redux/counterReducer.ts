
const initialState = 0
type finalCounterReducerActionType = incrementCounterACTypes | setCounterACTypes
export const CounterReducer = (state: number = initialState, action: finalCounterReducerActionType):number => {
    switch (action.type){
        case "INCREMENT": {
            return state = state + 1
        }
        case "SET": {
            return state = action.payload.value
        }
        default: return state
    }
}
type incrementCounterACTypes = ReturnType<typeof incrementCounterAC>
export const incrementCounterAC = () => {
    return {
        type: 'INCREMENT',
        payload: {

        }
    } as const
}
type setCounterACTypes = ReturnType<typeof setCounterAC>
export const setCounterAC = (value: number) => {
    return {
        type: 'SET',
        payload: {
            value
        }
    } as const
}