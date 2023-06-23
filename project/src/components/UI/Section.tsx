interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
}

export const Section = ({
  title,
  subtitle,
  description,
  children,
}: SectionProps) => {
  return (
    <section className="section">
      <h2 className="section--title">{title}</h2>
      <h3 className="section--subtitle">{subtitle}</h3>
      <p className="section--description">{description}</p>
      {children}
    </section>
  );
};
