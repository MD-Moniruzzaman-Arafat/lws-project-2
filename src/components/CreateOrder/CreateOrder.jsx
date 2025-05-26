import hanburger from '../../assets/hamburger.svg';
import chicken from '../../assets/chicken.svg';
import submarine from '../../assets/submarine.svg';
import pizza from '../../assets/pizza.svg';
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import Item from '../Item/Item';

export default function CreateOrder() {
    return (
        <>
            <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
                <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
                <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                    understanding of their requirements.</p>

                {/* <!-- Customer Name Input --> */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Customer Name</label>
                    <input type="text"
                        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />
                </div>

                {/* <!-- Choose Items --> */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Choose Items</label>
                    <div className="items-container">
                        {/* <!-- Item 1 --> */}
                        <Item img={hanburger} name={'Hamburger'} price={300} />

                        {/* <!-- Item 2 --> */}
                        <Item img={chicken} name={'Chicken Nuggets'} price={300} />

                        {/* <!-- Item 3 --> */}
                        <Item img={submarine} name={'Submarine Sandwich'} price={300} />

                        {/* <!-- Item 4 --> */}
                        <Item img={pizza} name={'Pizza slices'} price={300} />
                    </div>
                </div>

                {/* <!-- Place Order Button --> */}
                <button
                    className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Place Order (BDT 100)
                </button>
            </div>
        </>
    )
}
