import { Link } from "react-router-dom";
import { IPageLinkProps } from "../../@types";

const PageLink = ({ children, to }: IPageLinkProps) => {
  return <Link to={to}>{children}</Link>;
};

export default PageLink;
