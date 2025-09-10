import ChickenNuggetsItem from './ChickenNuggetsItem';
import HamburgerItem from './HamburgerItem';
import PizzaSlicesItem from './PizzaSlicesItem';
import SubmarineSandwichItem from './SubmarineSandwichItem';

export default function ChooseItems({
  totalPrice,
  setTotalPrice,
  itemCount,
  setItemCount,
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {/* <!-- Item 1 --> */}
          <HamburgerItem
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />

          {/* <!-- Item 2 --> */}
          <ChickenNuggetsItem
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />

          {/* <!-- Item 3 --> */}
          <SubmarineSandwichItem
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />

          {/* <!-- Item 4 --> */}
          <PizzaSlicesItem
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
        </div>
      </div>
    </>
  );
}
