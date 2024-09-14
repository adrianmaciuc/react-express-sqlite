import React from "react";
import axios from "axios";
import { AddEntryFormProps } from "./types";
import AddNewEntryBtn from "./buttons";

function AddEntryForm({ onAddEntry }: AddEntryFormProps) {
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
        data-testid="form"
      >
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="Developer"
            id="developer-input"
            placeholder="Developer"
            data-testid="developer-input"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="QA"
            id="QA-input"
            placeholder="QA"
            data-testid="qa-input"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="Manager"
            id="manager-input"
            placeholder="Manager"
            data-testid="manager-input"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            name="TeamName"
            id="teamname-input"
            placeholder="Team Name"
            data-testid="teamname-input"
          />
        </label>
        <label className="cs-label cs-message">
          <textarea
            className="cs-input cs-textarea"
            required
            name="Message"
            id="message-input"
            placeholder="Write task details..."
            data-testid="message-input"
          />
        </label>
        <AddNewEntryBtn message="Entry added successfully!" />
      </form>
    </>
  );
}

export default AddEntryForm;
