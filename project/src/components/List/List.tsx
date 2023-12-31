import React from "react";
import { DataProps } from "../../interface/interface";

interface ListProps {
  list: any[] | DataProps[] | undefined;
  error?: string;
  customClass: string;
  children: React.ReactNode;
}

export const List = ({ list, error, customClass, children }: ListProps) => {
  return (
    <>
      {list?.length !== 0 && (
        <div className="list">
          {!list && <p>{error}</p>}
          {list && <ul className={customClass}>{children}</ul>}
        </div>
      )}
    </>
  );
};
