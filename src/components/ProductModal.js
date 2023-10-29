import React from "react";
import Modal from "react-modal";
import { setMissing, setMissingUrgent } from "../actions";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "row", 
        justifyContent: "center",
    },
};

const buttonStyles = {
    display: "block",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 116, 217, 0.5)",
    color: "white",
    cursor: "pointer",
    marginRight: "10px", 
};

export default function ProductModal({
    isOpen,
    onRequestClose,
    currentProductId,
    dispatch,
}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <h2>Is it Missing Urgent?</h2>
            {/* Set the status of the product to Missing-Urgent or Missing depending on the user's choice */}
            <button
                style={buttonStyles}
                onClick={() => {
                    dispatch(setMissingUrgent(currentProductId));
                    onRequestClose();
                }}
            >
                Yes
            </button>
            <button
                style={buttonStyles}
                onClick={() => {
                    dispatch(setMissing(currentProductId));
                    onRequestClose();
                }}
            >
                No
            </button>
        </Modal>
    );
}
