interface ListItemProps {
  id: string;
  customClass: string;
  children: React.ReactNode;
}

export const ListItem = ({ id, customClass, children }: ListItemProps) => {
  return (
    <li id={id} className={customClass}>
      {children}
    </li>
  );
};
