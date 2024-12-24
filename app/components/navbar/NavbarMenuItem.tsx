import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const NavbarMenuItem = ({
  children,
  to,
  activeExtraClass,
}: {
  children: ReactNode;
  to: string;
  activeExtraClass: string;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `bg-teal-50 border-violet-500 dark:text-slate-100 block pl-3 pr-4 py-2 border-l-4 text-base font-mono font-medium ${activeExtraClass}`
          : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-mono font-medium dark:text-white dark:hover:bg-neutral-600'
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};