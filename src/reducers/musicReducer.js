const initState = {
    like: 0
}

const MusicReducer = (state=initState, action) => {
    switch(action.type) {
        case 'ADDLIKE':
            return { like: state.like + action.payload}
        default:
            return initState;
    }
}

export default MusicReducer;