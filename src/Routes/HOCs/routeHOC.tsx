import { ComponentType, FC } from "react";
import { selectUserType } from "src/features/user";
import { useAppSelector } from "src/store/hooks";
import { pagesAccessRights } from "../constants/pagesAccessRights";
import { RouteConfig } from "../types";
import AccessDenied from "src/components/AccessDenied";

const routeHOC =
  <ComponentProps extends object>(config: RouteConfig) =>
  (Component: ComponentType<ComponentProps>) => {
    const { title, pageAccessName } = config;

    document.title = title;

    const WrappedComponent: FC<ComponentProps> = (props) => {
      const userRole = useAppSelector(selectUserType);
      if (!pageAccessName) return <Component {...props} />;

      const pageAccessRights = pagesAccessRights.get(pageAccessName);

      if (!pageAccessRights) return <Component {...props} />;

      const { role } = pageAccessRights;

      const hasAccess = role === userRole;

      if (!hasAccess) return <AccessDenied />;

      return <Component {...props} />;
    };
    return WrappedComponent;
  };

export default routeHOC;
