import alertActions from "../actions/alertAction"

const initState = {
    showAlertMessege: false,
    alertMessgeContent: null
}

const reducer = (state = initState, action) => {

    switch (action.type) {        
        case alertActions.OPEN_ALERT_MESSEG:
            return {
                ...state,
                showAlertMessege: true,
                alertMessgeContent: action.content
        }
        case alertActions.CLOSE_ALERT_MESSEG:
            return {
                ...state,
                showAlertMessege: false,
                alertMessgeContent: null,
        }
        
        default:
            return state;
    }

}

export default reducer