export default function PendingOrder({ pendingOrder }) {
  return (
    <>
      <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
        <div className="text-5xl font-bold text-red-500 mb-2">
          {pendingOrder.length}
        </div>
        <div className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
          Pending
        </div>
      </div>
    </>
  );
}
