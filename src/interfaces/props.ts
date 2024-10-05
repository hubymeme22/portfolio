import { BoxProps } from "@mui/material";
import React from "react";

export interface BigHeaderProps {
  label: string;
  align?: "center" | "left" | "right";
  style?: any;
}

export interface MenuButtonProps {
  label: string;
  active?: boolean;
  style?: any;
  to?: string;
  onClick?: () => void;
}

export interface NextButtonProps {
  label: string;
  hidden?: boolean;
  onClick?: () => void;
}

export interface ParentComponentProps {
  children?: any;
}

export interface PageFillerProps {
  heightFill: string;
}

export interface SectionDividerProps {
  text: string;
  width: string;
}

export interface FullPageProps extends ParentComponentProps {
  id?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column";
  width?: string;
  style?: any;
}

export interface FlexBoxProps extends BoxProps {}
export interface PortfolioProps {
  page: number;
  setPage: (page: number) => void;
  scrollDisabled: boolean;
}

export interface HeaderProps {
  page: number;
  setPage: (page: number) => void;
}

export interface MinimalAccordionProps {
  imageSlide?: string[];
  title: string;
  subtitle: string;
  textContent?: string;
  content?: React.ReactNode;
  style?: any;
}

export interface ImageCarouselProps {
  images: string[];
}

export interface ChipProps {
  label: string;
  bgcolor: string;
  color: string;
}

export interface ProjectCardProps {
  iconType: "tool" | "web" | "algo";
  title: string;
  summaryContent: string;
  githubLink?: string;
  mergeReqLink?: string;
  style?: any;
  isMobile?: boolean;
}

export interface MultipleProjectCardsProps {
  data: ProjectCardProps[];
  enableTransitionEffect?: boolean;
  isMobile?: boolean;
}
