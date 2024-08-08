export const authReducer = (state = false, action) => {
    switch (action.type) {
        case 'IS_LOG':
            return !state;
            break;
        default:
            return state;
            break;
    }
}