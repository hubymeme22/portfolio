import { BigHeaderProps } from "../../interfaces/props";

const BigHeaderSubtitle: React.FC<BigHeaderProps> = ({ label, align }) => {
  return (
    <p
      className="subtitleHeader"
      style={{
        textAlign: align,
      }}
    >
      {label}
    </p>
  );
};

export default BigHeaderSubtitle;
