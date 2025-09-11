# lws-project-2

## Features

- **Order Creation:**

  - Users can create a new order by selecting items (Chicken Nuggets, Hamburger, Pizza Slices, Submarine Sandwich) and entering their name.
  - Quantity and item selection are interactive.
  - Order button to place the order.

- **Order Status Management:**

  - Orders start as "Pending".
  - Orders can be marked as "Delivered" via the report table.
  - Pending and delivered orders are tracked and updated in real time.

- **Order Report:**

  - View all orders in a table with customer name, items, amount, status, and actions.
  - Filter orders by All, Pending, or Delivered using a dropdown.
  - Delete orders or mark them as delivered directly from the report.

- **Order Summary:**

  - Dashboard cards show total orders, pending orders, and delivered orders with live counts.

- **Reusable Components:**

  - ToggleButton for UI toggles.
  - Navbar for navigation.

- **Modern UI:**
  - Responsive and visually appealing design using custom CSS.

## File Structure

```
lws-project-2/
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── chicken.svg
│   │   ├── hamburger.svg
│   │   ├── logo.svg
│   │   ├── pizza.svg
│   │   ├── react.svg
│   │   ├── submarine.svg
│   │   └── user-icon.svg
│   └── components/
│       ├── common/
│       │   └── ToggleButton.jsx
│       ├── createOrder/
│       │   ├── CreateOrder.jsx
│       │   ├── NameInputField.jsx
│       │   ├── OrderButton.jsx
│       │   └── chooseItems/
│       │       ├── ChickenNuggetsItem.jsx
│       │       ├── ChooseItems.jsx
│       │       ├── HamburgerItem.jsx
│       │       ├── PizzaSlicesItem.jsx
│       │       └── SubmarineSandwichItem.jsx
│       ├── navbar/
│       │   └── Navbar.jsx
│       ├── orderReport/
│       │   ├── OrderReport.jsx
│       │   └── OrderReportCard.jsx
│       └── orderSummary/
│           ├── DeliveredOrder.jsx
│           ├── OrderSummary.jsx
│           ├── PendingOrder.jsx
│           └── TotalOrder.jsx
```
