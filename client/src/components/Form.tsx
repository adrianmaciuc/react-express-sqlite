function AddEntryForm() {
  return (
    <>
      <form
        className="cs-form"
        id="cs-form-587-984"
        name="Contact Form"
        method="post"
      >
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="name-587-984"
            name="Developer"
            placeholder="Developer"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="phone-587-984"
            name="QA"
            placeholder="QA"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="email-587-984"
            name="Manager"
            placeholder="Manager"
          />
        </label>
        <label className="cs-label">
          <input
            className="cs-input"
            required
            type="text"
            id="email-587-984"
            name="TeamName"
            placeholder="Team Name"
          />
        </label>
        <label className="cs-label cs-message">
          <textarea
            className="cs-input cs-textarea"
            required
            name="Message"
            id="message-587-984"
            placeholder="Write task details..."
          ></textarea>
        </label>
        <button className="cs-button-solid cs-submit" type="submit">
          Add new entry
        </button>
      </form>
    </>
  );
}

export default AddEntryForm;
