import React from "react";
const Contact = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Contact;
