
export default function OrderReport() {
    return (
        <>
            <div>
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">Order Reports</h2>

                    <div className="flex gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel-icon lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" /></svg>
                        <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                            <option>All</option>
                            <option>Pending</option>
                            <option>Delivered</option>
                        </select>
                    </div>
                </div>
                <div className="bg-cardbg rounded-lg p-4">
                    <div className="reports-container">
                        <table className="min-w-full">
                            <thead>
                                <tr className="text-left text-sm">
                                    <th className="pb-3 font-medium">ID</th>
                                    <th className="pb-3 font-medium">Customer Name</th>
                                    <th className="pb-3 font-medium">Items</th>
                                    <th className="pb-3 font-medium">Amount</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {/* <!-- Row 1 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Sumit Saha</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>

                                {/* <!-- Row 2 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Akash Ahmed</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-green-500">DELIVERED</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>

                                    </td>
                                </tr>

                                {/* <!-- Row 3 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Saad Hasan</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>

                                {/* <!-- Row 4 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">MD Salahuddin</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>

                                {/* <!-- Row 5 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Ferdous</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>

                                {/* <!-- Row 6 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Rafe</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>

                                {/* <!-- Row 7 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Sarwar</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>

                                {/* <!-- Row 8 --> */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3">21</td>
                                    <td className="py-3">Obaidul</td>
                                    <td className="py-3">5</td>
                                    <td className="py-3">123123</td>
                                    <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                    <td className="py-3">
                                        <button
                                            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                        <button
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
