import style from "../../views/Home/Home.module.css";
const PlatformList = ({ platforms }) => {
  return (
    <ul>
      <h3 className={style.h3}>Available on</h3>
      {platforms?.map((platform) =>
        platform && platform.platform && platform.platform.name ? (
          <li
            style={{ display: "inline-block", paddingRight: "10px" }}
            key={platform.platform.id}
          >
            {" "}
            {platform.platform.name}{" "}
          </li>
        ) : (
          <li key={platform}>{platform}</li>
        )
      )}
    </ul>
  );
};

export default PlatformList;
