import React, { useState, useEffect } from "react";

interface AddNewEntryBtnProps {
  message: string;
}

const AddNewEntryBtn: React.FC<AddNewEntryBtnProps> = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [show]);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div>
      <button
        className="cs-button-solid cs-submit"
        type="submit"
        data-testid="new-entry-submit-btn"
        onClick={handleClick}
      >
        Add new entry
      </button>
      {show && (
        <div
          className="alert alert-info alert-dismissible"
          role="alert"
          style={{ position: "relative", top: "0.5rem" }}
        >
          {message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            data-testid="info-msg-entry-added"
          ></button>
        </div>
      )}
    </div>
  );
};

export default AddNewEntryBtn;
