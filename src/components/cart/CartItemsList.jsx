import CartItemRow from './CartItemRow';

const CartItemsList = ({ items, onDecreaseQty, onIncreaseQty, onRemove }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItemRow
          key={item.id}
          item={item}
          onDecrease={() => onDecreaseQty(item.id)}
          onIncrease={() => onIncreaseQty(item.id)}
          onRemove={() => onRemove(item.id)}
        />
      ))}
    </div>
  );
};

export default CartItemsList;


