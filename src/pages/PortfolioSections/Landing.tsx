import BigHeader from "../../components/Texts/BigHeader";
import BigHeaderSubtitle from "../../components/Texts/BigHeaderSubtitle";
import FlexBox from "../../components/FlexBox";

const Landing: React.FC = () => {
  return (
    <FlexBox height="100%" justifyContent="center">
      <BigHeader label="Backend Developer" align="center" />
      <BigHeaderSubtitle
        label="Backend Systems | Performance Optimization | API Development | Security Integration | (a bit of frontend *winks*)"
        align="center"
      />
    </FlexBox>
  );
};

export default Landing;
