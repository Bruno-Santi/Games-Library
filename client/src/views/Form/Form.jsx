import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendFormData } from "../../redux/actions";
import { getGenres, getPlatforms } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import style from "../Form/Form.module.css";
const Form = () => {
  const navigate = useNavigate();
  const formSuccess = useSelector((state) => state.formDataResponse);
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    background_image: "",
    released: "",
    rating: "",
    genre: [],
    platforms: [],
  });
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    let updatedValues;
    if (property === "genre" || property === "platforms") {
      const checked = e.target.checked;
      if (checked) {
        updatedValues = [...formData[property], value];
      } else {
        updatedValues = formData[property].filter((val) => val !== value);
      }
      setFormData((prevState) => ({ ...prevState, [property]: updatedValues }));
      setErrors((prevErrors) => ({ ...prevErrors, platforms: "" }));
      if (
        Object.values(errors).some(
          (val) => val === undefined || val === null || val === ""
        )
      ) {
        setDisabledButton(false);
      } else {
        setDisabledButton(true);
      }
    } else {
      const updatedFormData = { ...formData, [property]: value };
      const updatedErrors = validateFormData(updatedFormData, errors);

      setFormData(updatedFormData);
      setErrors(updatedErrors);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // ... enviar datos al servidor ...

    dispatch(sendFormData(formData));
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  };

  const validateFormData = (formData, errors) => {
    const updatedErrors = { ...errors };

    if (!formData.name) {
      updatedErrors.name = "Debe ingresar un nombre";
    } else {
      updatedErrors.name = "";
    }
    if (!formData.description) {
      updatedErrors.description = "Debe ingresar una descripción";
    } else {
      updatedErrors.description = "";
    }
    if (!formData.released) {
      updatedErrors.released = "Debe ingresar una fecha de lanzamiento";
    } else {
      updatedErrors.released = "";
    }
    if (!formData.rating) {
      updatedErrors.rating = "Debe ingresar un rating";
    } else {
      updatedErrors.rating = "";
    }
    if (formData.platforms.length === 0) {
      updatedErrors.platforms = "Debe ingresar al menos una plataforma";
    } else {
      updatedErrors.platforms = "";
    }
    return updatedErrors;
  };
  return (
    <div className={style.background}>
      <div className={style.container}>
        {formSuccess ? (
          <>
            <h1>{formSuccess} </h1> <h3>backing home in 5s....</h3>{" "}
          </>
        ) : (
          <h1 style={{ color: "white" }}>Create your game</h1>
        )}

        <div className={style.formContainer}>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Input game name"
            ></input>
            {errors.name && <p>{errors.name}</p>}
            <label for="description">Description:</label>
            <textarea
              name="description"
              placeholder="Input game description"
            ></textarea>
            {errors.description && <p>{errors.description}</p>}
            <label for="background_image">Image URL</label>
            <input
              type="text"
              name="background_image"
              placeholder="Input image URL here"
            ></input>
            <label for="released">Release Date</label>
            <input type="date" name="released"></input>
            {errors.released && <p>{errors.released}</p>}
            <label for="rating">Rating</label>
            <input type="text" name="rating" placeholder="Rating here"></input>
            {errors.rating && <p>{errors.rating}</p>}
            <div className={style.checkboxGroup}>
              <h2>Choose Genres</h2>
              <div className={style.checkboxContainer}>
                {genres.map((genre) => (
                  <div className={style.checkbox}>
                    <label className={style.formCheck}>
                      <input
                        class={style.check}
                        type="checkbox"
                        name="genre"
                        value={genre.id}
                        key={genre.id}
                      />
                      {genre.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.checkboxGroup}>
              <h2>Choose Platforms</h2>
              <div className={style.checkboxContainer}>
                {platforms.map((platform) => (
                  <div className={style.checkbox}>
                    <label className={style.formCheck}>
                      <input
                        className={style.checkbox}
                        type="checkbox"
                        name="platforms"
                        value={platform}
                        id={platform}
                      />
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {errors.platforms && <p>{errors.platforms}</p>}
            <button type="submit" disabled={disabledButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
