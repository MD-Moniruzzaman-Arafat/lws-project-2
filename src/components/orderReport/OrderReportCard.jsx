export default function OrderReportCard({
  order,
  index,
  onDelete,
  onDelivery,
}) {
  return (
    <>
      <tr className="border-t border-gray-700">
        <td className="py-3">{index + 1}</td>
        <td className="py-3">{order.name}</td>
        <td className="py-3">{order.totalItem}</td>
        <td className="py-3">{order.totalAmount}</td>
        <td className="py-3">
          {order.orderStatus === 'PENDING' ? (
            <span className="text-red-500">{order.orderStatus}</span>
          ) : (
            <span className="text-green-500">{order.orderStatus}</span>
          )}
        </td>
        <td className="py-3">
          <button
            onClick={() => onDelete(order.name)}
            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
          >
            Delete
          </button>
          <button
            onClick={() => onDelivery(order.name)}
            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
          >
            DELIVER
          </button>
        </td>
      </tr>
    </>
  );
}
