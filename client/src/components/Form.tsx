import React, { useState } from "react";
import axios from "axios";

interface AddEntryFormProps {
  developer: string;
  QA: string;
  manager: string;
  task: string;
  teamname: string;
}

function AddEntryForm() {
  const [entryAdded, setEntryAdded] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: AddEntryFormProps = {
      developer: event.currentTarget.developerInput.value,
      QA: event.currentTarget.QAinput.value,
      manager: event.currentTarget.managerInput.value,
      task: event.currentTarget.messageInput.value,
      teamname: event.currentTarget.teamnameInput.value,
    };
    try {
      const response = await axios.post("/api", data);
      console.log(response.data);
      setEntryAdded(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="cs-form"
        id="cs-form-587-984"
        name="Contact Form"
        method="post"
        onSubmit={handleSubmit}
      >
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="developerInput"
            name="Developer"
            placeholder="Developer"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="QAinput"
            name="QA"
            placeholder="QA"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="managerInput"
            name="Manager"
            placeholder="Manager"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="teamnameInput"
            name="TeamName"
            placeholder="Team Name"
          />
        </label>
        <label className="cs-label cs-message">
          <textarea
            className="cs-input cs-textarea"
            required
            name="Message"
            id="messageInput"
            placeholder="Write task details..."
          ></textarea>
        </label>
        <button className="cs-button-solid cs-submit" type="submit">
          Add new entry
        </button>
        {entryAdded && (
          <p className="entry-added-message">Entry added successfully!</p>
        )}
      </form>
    </>
  );
}

export default AddEntryForm;
