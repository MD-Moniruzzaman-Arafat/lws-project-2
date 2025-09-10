import ChickenNuggetsItem from './ChickenNuggetsItem'
import HamburgerItem from './HamburgerItem'
import PizzaSlicesItem from './PizzaSlicesItem'
import SubmarineSandwichItem from './SubmarineSandwichItem'

export default function ChooseItems() {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {/* <!-- Item 1 --> */}
          <HamburgerItem />

          {/* <!-- Item 2 --> */}
          <ChickenNuggetsItem />

          {/* <!-- Item 3 --> */}
          <SubmarineSandwichItem />

          {/* <!-- Item 4 --> */}
          <PizzaSlicesItem />
        </div>
      </div>
    </>
  )
}
