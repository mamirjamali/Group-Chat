import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect } from "react-redux"
import { getActions } from '../../store/actions/alertAction';

const AlertNotification = ({showAlertMessege, alertCloseMessage, alertMessgeContent}) => {
  return (
    <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={showAlertMessege}
          onClose={alertCloseMessage}
          autoHideDuration={6000}
    >
      <Alert severity='info'>{alertMessgeContent}</Alert>
    </Snackbar>
  )
}

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert
  }
}

const mapAcitonsToProps = dispatch => {
  return {
    ...getActions(dispatch)
  }
}


export default connect(mapStoreStateToProps, mapAcitonsToProps) (AlertNotification)