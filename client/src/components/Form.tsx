import React, { useState } from "react";
import axios from "axios";
import { AddEntryFormProps } from "./types";
import AddNewEntryBtn from "./cards/buttons";
import { tokenContext } from "./context";

function AddEntryForm({ onAddEntry }: AddEntryFormProps) {
  const [developer, setDeveloper] = useState("");
  const [QA, setQA] = useState("");
  const [manager, setManager] = useState("");
  const [task, setTask] = useState("");
  const [teamname, setTeamname] = useState("");
  const [tokenFieldInput, setTokenFieldInput] = useState("");
  const [tokenValidation, setTokenValidation] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // prevent the default form submission behavior, which is to refresh the page
    event.preventDefault();

    // get the form data from the event and prepare the request body to be sent to the server
    const formData = new FormData(event.currentTarget);
    const requestBody = {
      developer: formData.get("Developer") as string,
      QA: formData.get("QA") as string,
      manager: formData.get("Manager") as string,
      task: formData.get("Message") as string,
      teamname: formData.get("TeamName") as string,
    };

    try {
      const response = await axios.post("/api", requestBody, {
        params: { token: tokenFieldInput },
      });

      // validation of token is done in the backend and if response is OK tokenValidation is set to true
      if (response.status === 201) {
        setTokenValidation(true);
      }
      if (onAddEntry) {
        onAddEntry(response.data);
      }
      setDeveloper("");
      setQA("");
      setManager("");
      setTask("");
      setTeamname("");
      setTokenFieldInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <tokenContext.Provider value={tokenValidation}>
        <form
          className="cs-form"
          id="cs-form-587-984"
          name="add-new-entry-form"
          method="post"
          onSubmit={handleFormSubmit}
          data-testid="add-form"
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
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
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
              value={QA}
              onChange={(e) => setQA(e.target.value)}
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
              value={manager}
              onChange={(e) => setManager(e.target.value)}
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
              value={teamname}
              onChange={(e) => setTeamname(e.target.value)}
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
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <label className="cs-label">
            <input
              className="cs-input"
              required
              name="Token"
              id="token-input"
              placeholder="secret key"
              data-testid="token-input"
              value={tokenFieldInput}
              onChange={(e) => setTokenFieldInput(e.target.value)}
            />
          </label>
          <AddNewEntryBtn
            setTokenValidation={setTokenValidation}
            message="Entry added successfully!"
          />
        </form>
      </tokenContext.Provider>
    </>
  );
}

export default AddEntryForm;
