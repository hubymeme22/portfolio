import BigHeaderSubtitle from "./BigHeaderSubtitle";

const PageInstruct: React.FC<{ text: string; hidden?: boolean }> = ({
  text,
  hidden,
}) => {
  return !hidden ? (
    <BigHeaderSubtitle
      label={text}
      align="center"
      style={{
        width: "99.5%", // LOOOOOL HAHAHAHA
        margin: 0,
        padding: 0,
        position: "absolute",
        textAlign: "center",
        bottom: "5em",
        color: "var(--secondary-light-faded)",
        animation: "upAndDown 2s infinite",
      }}
    />
  ) : (
    <></>
  );
};

export default PageInstruct;
