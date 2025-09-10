import './App.css'
import CreateOrder from './components/createOrder/CreateOrder'
import Navbar from './components/navbar/Navbar'
import OrderSummary from './components/orderSummary/OrderSummary'

function App() {
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          {/* <!-- Create Order Section --> */}
          <CreateOrder />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* order summary */}
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
