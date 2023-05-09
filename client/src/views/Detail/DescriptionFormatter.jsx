const DescriptionFormatter = ({ description }) => {
  const plainText = description?.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <p>{plainText}</p>
    </>
  );
};

export default DescriptionFormatter;
