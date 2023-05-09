const PlatformList = ({ platforms }) => {
  return (
    <ul>
      <h3>Available on</h3>
      {platforms?.map((platform) =>
        platform && platform.platform && platform.platform.name ? (
          <li key={platform.platform.id}>{platform.platform.name}</li>
        ) : (
          <li key={platform}>{platform}</li>
        )
      )}
    </ul>
  );
};

export default PlatformList;
