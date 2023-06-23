import { Logo } from "./Logo";
import { Button } from "./Button";

import { ShoppingCartSimple } from "@phosphor-icons/react";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <Logo color="#f2410d" />
      {children}
    </header>
  );
};
