import { Confetti } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer>
      <small>
        Developed with fun by Jennifer Magpantay{" "}
        <Confetti size={18} color="#fafafa" />
      </small>
      <small>
        Design inspiration from{" "}
        <a
          href="https://dribbble.com/shots/15480237-Fudo-Food-Delivery-Landing-Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andika Wiraputra for One Week Wonders
        </a>
      </small>
    </footer>
  );
};
