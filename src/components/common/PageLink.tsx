import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IPageLinkProps {
  children: ReactNode;
  to: string;
}

const PageLink = ({ children, to }: IPageLinkProps) => {
  return <Link to={to}>{children}</Link>;
};

export default PageLink;
