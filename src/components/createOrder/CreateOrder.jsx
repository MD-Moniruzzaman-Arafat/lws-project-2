import { useState } from 'react';
import ChooseItems from './chooseItems/ChooseItems';
import NameInputField from './NameInputField';
import OrderButton from './OrderButton';

export default function CreateOrder({
  totalPrice,
  setTotalPrice,
  itemCount,
  setItemCount,
  orderItem,
  setOrderItem,
  totalOrder,
  setTotalOrder,
}) {
  const [username, setUserName] = useState('');

  function handlePlaceOrder(e) {
    e.preventDefault();
    const order = {
      ...orderItem,
      name: username,
      totalAmount: totalPrice,
      totalItem: itemCount,
      orderStatus: 'PENDING',
    };
    setOrderItem(order);
    setTotalOrder([...totalOrder, order]);
  }
  console.log(orderItem);

  return (
    <>
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        <form onSubmit={handlePlaceOrder}>
          {/* <!-- Customer Name Input --> */}
          <NameInputField username={username} setUserName={setUserName} />

          {/* <!-- Choose Items --> */}
          <ChooseItems
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />

          {/* <!-- Place Order Button --> */}
          <OrderButton totalPrice={totalPrice} />
        </form>
      </div>
    </>
  );
}
