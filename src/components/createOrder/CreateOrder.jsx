import ChooseItems from './chooseItems/ChooseItems'
import NameInputField from './NameInputField'
import OrderButton from './OrderButton'

export default function CreateOrder() {
  return (
    <>
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        {/* <!-- Customer Name Input --> */}
        <NameInputField />

        {/* <!-- Choose Items --> */}
        <ChooseItems />

        {/* <!-- Place Order Button --> */}
        <OrderButton />
      </div>
    </>
  )
}
