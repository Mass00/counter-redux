import {combineReducers, legacy_createStore as createStore} from "redux"
import {CounterReducer} from "./counterReducer";
import {MinMaxReducer} from "./minMaxReducer";
import {isEditReducer} from "./editStatusReducer";

export type RootReducerTypes = ReturnType<typeof RootReducer>
const RootReducer = combineReducers({
    counter: CounterReducer,
    minMax: MinMaxReducer,
    isEdit: isEditReducer
}as const)

export const store = createStore(RootReducer)