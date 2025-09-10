import DeliveredOrder from './DeliveredOrder'
import PendingOrder from './PendingOrder'
import TotalOrder from './TotalOrder'

export default function OrderSummary() {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* <!-- Total Orders --> */}
          <TotalOrder />

          {/* <!-- Pending Orders --> */}
          <PendingOrder />

          {/* <!-- Delivered Orders --> */}
          <DeliveredOrder />
        </div>
      </div>
    </>
  )
}
