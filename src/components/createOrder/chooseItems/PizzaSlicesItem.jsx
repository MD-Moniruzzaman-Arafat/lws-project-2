import { useState } from 'react';
import pizza from '../../../assets/pizza.svg';
import ToggleButton from '../../common/ToggleButton';

export default function PizzaSlicesItem({
  totalPrice,
  setTotalPrice,
  itemCount,
  setItemCount,
}) {
  const [selectItem, setSelectItem] = useState(true);

  function handleSelectItem() {
    setSelectItem(!selectItem);
    setTotalPrice(totalPrice + 300);
    setItemCount(itemCount + 1);
    console.log(totalPrice);
  }

  function handleRemoveItem() {
    setSelectItem(!selectItem);
    setTotalPrice(totalPrice - 300);
    setItemCount(itemCount - 1);
    console.log(totalPrice);
  }

  return (
    <>
      <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center mr-3">
            <img src={pizza} alt="Pizza slices" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-medium">Pizza slices</h3>
            <p className="text-xs text-gray-400">BDT 300</p>
          </div>
        </div>
        <ToggleButton
          handleSelectItem={handleSelectItem}
          handleRemoveItem={handleRemoveItem}
          selectItem={selectItem}
        />
      </div>
    </>
  );
}
