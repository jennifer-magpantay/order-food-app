import React from "react";

interface ButtonProps {
  id: string;
  type: "button" | "submit";
  text: string;
  customClasses?: string;
  icon?: React.ReactNode;
  dataCount?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({
  id,
  type,
  text,
  customClasses,
  icon,
  dataCount,
  onClick,
}: ButtonProps) => {
  const _customClasses = ["button", customClasses].join(" ");

  const renderButtonContent = (customClasses: string) => {
    if (customClasses?.includes("icon")) {
      return (
        <>
          <span className="sr-only">{text}</span>
          {icon}
        </>
      );
    } else {
      return (
        <>
          {text}
          {icon && icon}
        </>
      );
    }
  };
  return (
    <>
      {customClasses?.includes("cart") ? (
        <button
          id={id}
          className={_customClasses}
          type={type}
          data-count={dataCount}
          onClick={onClick}
        >
          {customClasses && renderButtonContent(customClasses)}
        </button>
      ) : (
        <button
          id={id}
          className={_customClasses}
          type={type}
          onClick={onClick}
        >
          {customClasses && renderButtonContent(customClasses)}
        </button>
      )}
    </>
  );
};
