import React, { useState } from "react";
import axios from "axios";
import { AddEntryFormProps } from "./types";

function AddEntryForm({ onAddEntry }: AddEntryFormProps) {
  const [isEntryAdded, setIsEntryAdded] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entry = {
      developer: formData.get("Developer") as string,
      QA: formData.get("QA") as string,
      manager: formData.get("Manager") as string,
      task: formData.get("Message") as string,
      teamname: formData.get("TeamName") as string,
    };

    try {
      const response = await axios.post("/api", entry);
      setIsEntryAdded(true);
      if (onAddEntry) {
        onAddEntry(response.data);
      }
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
        onSubmit={handleFormSubmit}
      >
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="Developer"
            id="developerInput"
            placeholder="Developer"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="QA"
            id="QAinput"
            placeholder="QA"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="Manager"
            id="managerInput"
            placeholder="Manager"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="TeamName"
            id="teamnameInput"
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
          />
        </label>
        <button className="cs-button-solid cs-submit" type="submit">
          Add new entry
        </button>
        {isEntryAdded && (
          <p className="entry-added-message">Entry added successfully!</p>
        )}
      </form>
    </>
  );
}

export default AddEntryForm;
