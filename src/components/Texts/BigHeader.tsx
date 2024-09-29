import { BigHeaderProps } from "../../interfaces/props";

const BigHeader: React.FC<BigHeaderProps> = ({ label, align }) => {
  return (
    <p
      className="bigHeader"
      style={{
        textAlign: align,
      }}
    >
      {label}
    </p>
  );
};

export default BigHeader;
