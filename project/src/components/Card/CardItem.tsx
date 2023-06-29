import { Form } from "../Form/Form";
import { InputCounter } from "../Form/InputCounter";

interface CardItemProps {
  id: string;
  description: string;
  price: string;
  amount: number;
}

export const CardItem = ({ id, description, price, amount }: CardItemProps) => {
  return (
    <div className="card">
      <div className="card--main">
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div className="card--aside">
        <Form dataId={id}>
          <InputCounter itemId={id} itemAmount={amount} />
        </Form>
      </div>
    </div>
  );
};
