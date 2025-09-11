import { useState } from 'react';
import './App.css';
import CreateOrder from './components/createOrder/CreateOrder';
import Navbar from './components/navbar/Navbar';
import OrderReport from './components/orderReport/OrderReport';
import OrderSummary from './components/orderSummary/OrderSummary';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [orderItem, setOrderItem] = useState({
    name: '',
    totalItem: 0,
    totalAmount: 0,
    orderStatus: '',
  });
  const [totalOrder, setTotalOrder] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);

  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          {/* <!-- Create Order Section --> */}
          <CreateOrder
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
            orderItem={orderItem}
            setOrderItem={setOrderItem}
            totalOrder={totalOrder}
            setTotalOrder={setTotalOrder}
            pendingOrder={pendingOrder}
            setPendingOrder={setPendingOrder}
          />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* order summary */}
            <OrderSummary totalOrder={totalOrder} pendingOrder={pendingOrder} />

            {/* order report */}
            <OrderReport
              totalOrder={totalOrder}
              setTotalOrder={setTotalOrder}
              pendingOrder={pendingOrder}
              setPendingOrder={setPendingOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
