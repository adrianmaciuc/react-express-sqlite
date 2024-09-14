import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface AddNewEntryBtnProps {
  message: string;
  tokenValidation: boolean;
  setTokenValidation: (value: boolean) => void;
}

const AddNewEntryBtn: React.FC<AddNewEntryBtnProps> = ({
  message,
  tokenValidation,
  setTokenValidation,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
      setTokenValidation(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [setTokenValidation, show]);

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
      {show && tokenValidation && (
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

export const BackButton: React.FC = () => {
  const handleBackBtnClick = () => {
    window.history.back();
  };

  return (
    <>
      <MdOutlineArrowBackIos />
      <button
        className="cs-button-6"
        onClick={handleBackBtnClick}
        type="button"
        aria-label="Go back"
        data-testid="back-button"
      >
        <span>Back</span>
      </button>
    </>
  );
};

export default AddNewEntryBtn;
