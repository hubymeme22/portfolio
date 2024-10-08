import { MinimalAccordionProps } from "../../interfaces/props";
import MinimalAccordion from "./MinimalAccordion";

const MultipleMinimalAccordion: React.FC<{ data: MinimalAccordionProps[] }> = ({
  data,
}) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((accordionData, id) => {
          return (
            <MinimalAccordion
              key={id}
              subtitle={accordionData.subtitle}
              title={accordionData.title}
              content={accordionData.content}
              imageSlide={accordionData.imageSlide}
              textContent={accordionData.textContent}
              style={{
                opacity: 0,
                animation: `fadeInFromRight ${0.5 + id * 0.5}s forwards`,
              }}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default MultipleMinimalAccordion;
