import React from "react";
import { DataProps } from "../Menu/Menu";

interface ListProps {
  list: any[] | DataProps[] | undefined;
  error?: string;
  customClass: string;
  children: React.ReactNode;
}

export const List = ({ list, error, customClass, children }: ListProps) => {
  return (
    <div className="list">
      {!list && <p>{error}</p>}
      {list && <ul className={customClass}>{children}</ul>}
    </div>
  );
};
