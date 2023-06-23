interface MainProps {
  customClasses?: string;
  children: React.ReactNode;
}
export const Main = ({ customClasses, children }: MainProps) => {
  return <main className={customClasses}>{children}</main>;
};
