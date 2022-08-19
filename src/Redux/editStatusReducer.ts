export const isEditReducer = (state: boolean = false, action: isEditACType) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":{
            return state = !state
        }
        default: return state
    }
};
type isEditACType = ReturnType<typeof isEditAC>
export const isEditAC = () => {
    return {
        type: 'CHANGE_EDIT_STATUS',
        payload :{
        }
    }as const
}