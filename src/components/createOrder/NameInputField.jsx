export default function NameInputField({ userName, setUserName }) {
  function handleChange(e) {
    setUserName(e.target.value);
  }

  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          name="userName"
          onChange={handleChange}
          value={userName}
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>
    </>
  );
}
