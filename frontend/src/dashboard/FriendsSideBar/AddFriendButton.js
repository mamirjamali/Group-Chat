import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
  color: 'white',
};

const AddFriendButton = () => {
  const handleOpenAddFriendDialog = () => {
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        lable="Add Friend"
        handleClick={handleOpenAddFriendDialog}
        isValid ={true}
      />
    </>
  );
};

export default AddFriendButton;
