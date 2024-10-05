import { MultipleProjectCardsProps } from "../../interfaces/props";
import ProjectCard from "./ProjectCard";

const MultipleProjectCards: React.FC<MultipleProjectCardsProps> = ({
  data,
  enableTransitionEffect,
  isMobile,
}) => {
  return data.length > 0 ? (
    data.map((project, id) => {
      console.log(id);
      return (
        <ProjectCard
          key={id}
          isMobile={isMobile}
          iconType={project.iconType}
          summaryContent={project.summaryContent}
          title={project.title}
          githubLink={project.githubLink}
          mergeReqLink={project.mergeReqLink}
          style={{
            animation: enableTransitionEffect
              ? `projectCardAnimation ${0.3 + id * 0.3}s forwards`
              : "",
          }}
        />
      );
    })
  ) : (
    <></>
  );
};

export default MultipleProjectCards;
