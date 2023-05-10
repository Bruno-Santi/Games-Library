import style from "../../views/Home/Home.module.css";
const DescriptionFormatter = ({ description }) => {
  const plainText = description?.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <p className={style.description}>{plainText}</p>
    </>
  );
};

export default DescriptionFormatter;
