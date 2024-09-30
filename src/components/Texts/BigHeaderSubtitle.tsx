import { BigHeaderProps } from "../../interfaces/props";

const BigHeaderSubtitle: React.FC<BigHeaderProps> = ({
  label,
  align,
  style,
}) => {
  return (
    <p
      className="subtitleHeader"
      style={{
        textAlign: align,
        ...style,
      }}
    >
      {label}
    </p>
  );
};

export default BigHeaderSubtitle;
