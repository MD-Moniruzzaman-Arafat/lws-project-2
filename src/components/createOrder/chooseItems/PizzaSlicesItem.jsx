import pizza from '../../../assets/pizza.svg';
import ToggleButton from '../../common/ToggleButton';

export default function PizzaSlicesItem() {
  return (
    <>
      <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center mr-3">
            <img src={pizza} alt="Pizza slices" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-medium">Pizza slices</h3>
            <p className="text-xs text-gray-400">BDT 300</p>
          </div>
        </div>
        <ToggleButton />
      </div>
    </>
  );
}
