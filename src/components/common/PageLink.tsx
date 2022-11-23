import { ReactNode } from "react";
import { Link } from "react-router-dom";
const PageLink = ({ children, to }: { children: ReactNode; to: string }) => {
  return <Link to={to}>{children}</Link>;
};

export default PageLink;
