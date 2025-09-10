import './App.css'
import CreateOrder from './components/createOrder/CreateOrder'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          {/* <!-- Create Order Section --> */}
          <CreateOrder />
        </div>
      </div>
    </>
  )
}

export default App
