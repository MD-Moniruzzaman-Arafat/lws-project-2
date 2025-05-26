import hanburger from '../../assets/hamburger.svg';
import chicken from '../../assets/chicken.svg';
import submarine from '../../assets/submarine.svg';
import pizza from '../../assets/pizza.svg';
import Item from '../Item/Item';
import { useState } from 'react';

export default function CreateOrder() {
    const [orderItems, setOrderItems] = useState({
        customerName: '',
        items: []
    });

    function handleChange(event) {
        // Handle input change
        const { name, value } = event.target;
        setOrderItems(
            { ...orderItems, [name]: value }
        )
    }
    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission
        console.log(orderItems);

        event.target.reset(); // Reset the form after submission
    }

    // Function to calculate total price
    function calculateTotalPrice() {
        return orderItems.items.reduce((total, item) => total + item.price, 0);
    }

    return (
        <>
            <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
                <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
                <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                    understanding of their requirements.</p>

                <form onSubmit={handleSubmit}>
                    {/* <!-- Customer Name Input --> */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Customer Name</label>
                        <input onChange={handleChange} name='customerName' value={orderItems.customerName} type="text"
                            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />
                    </div>

                    {/* <!-- Choose Items --> */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Choose Items</label>
                        <div className="items-container">
                            {/* <!-- Item 1 --> */}
                            <Item img={hanburger} name={'Hamburger'} price={300} orderItems={orderItems} setOrderItems={setOrderItems} />

                            {/* <!-- Item 2 --> */}
                            <Item img={chicken} name={'Chicken Nuggets'} price={300} orderItems={orderItems} setOrderItems={setOrderItems} />

                            {/* <!-- Item 3 --> */}
                            <Item img={submarine} name={'Submarine Sandwich'} price={300} orderItems={orderItems} setOrderItems={setOrderItems} />

                            {/* <!-- Item 4 --> */}
                            <Item img={pizza} name={'Pizza slices'} price={300} orderItems={orderItems} setOrderItems={setOrderItems} />
                        </div>
                    </div>

                    {/* <!-- Place Order Button --> */}
                    <button type='submit'
                        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Place Order (BDT {calculateTotalPrice()})
                    </button>
                </form>
            </div>
        </>
    )
}
