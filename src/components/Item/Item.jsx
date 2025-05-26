import { useState } from "react";
import AddButton from "../AddButton/AddButton";
import RemoveButton from "../RemoveButton/RemoveButton";

export default function Item({ img, name, price, orderItems, setOrderItems }) {
    const [toggle, setToggle] = useState(true);

    function handleAddItem() {
        setOrderItems(
            {
                ...orderItems,
                items: [
                    ...orderItems.items,
                    { name, price }
                ]
            }
        )
        setToggle(!toggle);
    }

    function handleRemoveItem() {
        setOrderItems(
            {
                ...orderItems,
                items: orderItems.items.filter(item => item.name !== name)
            }
        )
        setToggle(!toggle);
    }


    return (
        <>
            <div
                className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                <div className="flex items-center">
                    <div className="w-12 h-12   flex items-center justify-center mr-3">
                        <img src={img} alt="Hamburger" className="w-10 h-10" />
                    </div>
                    <div>
                        <h3 className="font-medium">{name}</h3>
                        <p className="text-xs text-gray-400">BDT {price}</p>
                    </div>
                </div>
                {
                    toggle ? <AddButton onHandleClick={handleAddItem} /> : <RemoveButton onHandleClick={handleRemoveItem} />
                }
            </div >
        </>
    )
}
