const GenresList = ({ genres }) => {
  return (
    <ul>
      <h3>Genres</h3>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
