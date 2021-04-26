import React, { useState } from "react";
import PropTypes from "prop-types";
import connect from "react-redux";

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    band: "",
    country: "",
    city: "",
    instruments: "",
    bio: "",
    website: "",
    status: "",
    twitter: "",
    youtube: "",
    facebook: "",
    spotify: "",
    instagram: "",
    soundcloud: "",
  });

  const {
    band,
    country,
    city,
    instruments,
    bio,
    website,
    status,
    twitter,
    youtube,
    facebook,
    spotify,
    instagram,
    soundcloud,
  } = formData;

  const [displaySocial, setDisplaySocial] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0">
              * Select Most Relevant Professional Status
            </option>
            <option value="Developer">Freelancer</option>
            <option value="Senior Developer">Roadie</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Resident/Band Member</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Band"
            name="band"
            value={band}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Could be your own band or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Could be your own or a band website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={country}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Country (eg. Portugal)</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">City (eg. Lisbon)</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Instruments"
            name="instruments"
            value={instruments}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg.
            Piano,Bass,Guitar,Vocals,etc.)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Bio"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="my-2">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setDisplaySocial(!displaySocial)}
          >
            Add Social Network Links
          </button>
          <span>(Optional)</span>
        </div>

        {/* TOGGLE DISPLAY SOCIAL */}
        {displaySocial && (
          <>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-spotify fa-2x"></i>
              <input
                type="text"
                placeholder="Spotify URL"
                name="spotify"
                value={spotify}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-soundcloud fa-2x"></i>
              <input
                type="text"
                placeholder="Soundcloud URL"
                name="soundcloud"
                value={soundcloud}
                onChange={(e) => onChange(e)}
              />
            </div>
          </>
        )}
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
