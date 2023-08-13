import React from "react";

function Form() {
  return (
    <div>
      <h1 className="text-3xl">Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <form method="post" action="#">
        <fieldset>
          <label htmlFor="firt-name">
            Enter Your First Name:{" "}
            <input id="first-name" name="first-name" type="text" required />
          </label>
          <label htmlFor="last-name">
            Enter Your Last Name:{" "}
            <input id="last-name" name="last-name" type="text" required />
          </label>
          <label htmlFor="email">
            Enter Your Email:{" "}
            <input id="email" name="email" type="email" required />
          </label>
          <label htmlFor="new-password">
            Create a New Password:{" "}
            <input
              id="new-password"
              name="new-password"
              type="password"
              pattern="[a-z0-5]{8,}"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <label for="personal-account">
            <input
              id="personal-account"
              type="radio"
              name="account-type"
              class="inline"
            />{" "}
            Personal Account
          </label>
          <label for="business-account">
            <input
              id="business-account"
              type="radio"
              name="account-type"
              class="inline"
            />{" "}
            Business Account
          </label>
          <label for="terms-and-conditions">
            <input
              id="terms-and-conditions"
              type="checkbox"
              required
              name="terms-and-conditions"
              class="inline"
            />{" "}
            I accept the <a href="#">terms and conditions</a>
          </label>
        </fieldset>
        <fieldset>
          <label for="profile-picture">
            Upload a profile picture:{" "}
            <input id="profile-picture" type="file" name="file" />
          </label>
          <label for="age">
            Input your age (years):{" "}
            <input id="age" type="number" name="age" min="13" max="120" />
          </label>
          <label for="referrer">
            How did you hear about us?
            <select id="referrer" name="referrer" className="text-black">
              <option value="" className="text-black">
                (select one)
              </option>
              <option value="1" className="text-black">
                News
              </option>
              <option value="2" className="text-black">
                YouTube Channel
              </option>
              <option value="3" className="text-black">
                Online Forum
              </option>
              <option value="4" className="text-black">
                Other
              </option>
            </select>
          </label>
          <label for="bio">
            Provide a bio:
            <textarea
              id="bio"
              name="bio"
              rows="3"
              cols="30"
              placeholder="I like coding on the beach..."
            ></textarea>
          </label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
