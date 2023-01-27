const alertActions = {
    OPEN_ALERT_MESSEG: 'ALERT.OPEN_ALERT_MESSEG',
    CLOSE_ALERT_MESSEG: 'ALERT.CLOSE_ALERT_MESSEG',
}

export const getActions = (dispatch) => {
    return {
        alertOpenMessage: (content) => dispatch(openAlertMesseg(content)),
        alertCloseMessage: () => dispatch(closeAlertMesseg()),
    };
};

export const openAlertMesseg = (content) => {
    return {
        type: alertActions.OPEN_ALERT_MESSEG,
        content
    }
}

export const closeAlertMesseg = () => {
    return {
        type: alertActions.CLOSE_ALERT_MESSEG,
    }
}

export default alertActions