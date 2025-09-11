export default function TotalOrder({ totalOrder }) {
  return (
    <>
      <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
        <div className="text-5xl font-bold text-yellow-500 mb-2">
          {totalOrder.length}
        </div>
        <div className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
          Total Order
        </div>
      </div>
    </>
  );
}
