import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'border-slate-900    h-full inline-flex items-center px-1 pt-1 border-b-2  font-semibold'
          : 'border-transparent text-black   dark:hover:bg-zinc-700 inline-flex items-center px-1 pt-1 border-b-2  font-semibold '
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};