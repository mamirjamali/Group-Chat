import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { validEmail } from "../../shared/utils/validator";
import InputWithLable from "../../shared/components/InputWithLable"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {}}) => {
  
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    // send friend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validEmail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLable
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
            <CustomPrimaryButton
                onClick={handleSendInvitation}
                isValid={isFormValid}
                lable="Send"
                additionalStyles={{
                marginLeft: "15px",
                marginRight: "15px",
                marginBottom: "10px",
                }}
            />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
