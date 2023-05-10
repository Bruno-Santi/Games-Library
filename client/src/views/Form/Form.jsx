import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendFormData } from "../../redux/actions";
import { getGenres, getPlatforms } from "../../redux/actions";

const Form = () => {
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    background_image: "",
    released: "",
    genre: [],
    platforms: [],
  });
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);
  const [errors, setErrors] = useState({
    initialState: "",
  });
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
    } else {
      const updatedFormData = { ...formData, [property]: value };
      const updatedErrors = validateFormData(updatedFormData, errors);
      setFormData(updatedFormData);
      setErrors(updatedErrors);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendFormData(formData));
  };
  const validateFormData = (formData) => {
    const updatedErrors = {};
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

    if (formData.platforms.length === 0) {
      updatedErrors.platforms = "Debe ingresar al menos una plataforma";
    } else {
      updatedErrors.platforms = "";
    }
    return updatedErrors;
  };

  return (
    <div>
      <h1>Create your game</h1>
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
        <label for="metacritic">Rating</label>
        <input type="text" name="rating" placeholder="Rating here"></input>
        {genres.map((genre) => (
          <label>
            <input
              type="checkbox"
              name="genre"
              value={genre.id}
              key={genre.id}
            />
            {genre.name}
          </label>
        ))}
        {platforms.map((platform) => (
          <label>
            <input
              type="checkbox"
              name="platforms"
              value={platform}
              id={platform}
            ></input>
            {platform}
          </label>
        ))}
        {errors.platforms && <p>{errors.platforms}</p>}
        <button
          type="submit"
          disabled={Object.values(errors).some((value) => value !== "")}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
