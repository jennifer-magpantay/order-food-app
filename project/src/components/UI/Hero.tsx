import { BowlFood, Hamburger, Pizza, Popcorn } from "@phosphor-icons/react";
export const Hero = () => {
  return (
    <div className="hero">
      <h1>
        The fastest way to have a <span>delicious meal</span> at your door
      </h1>

      <div className="image">
        <BowlFood size={48} weight="bold" color="#fef7f5" />
        <Hamburger size={48} weight="bold" color="#fef7f5" />
        <Pizza size={48} weight="bold" color="#fef7f5" />
        <Popcorn size={48} weight="bold" color="#fef7f5" />
      </div>
    </div>
  );
};
