# Instant Aberturas App

Instant Aberturas is an e-commerce application for selling doors and windows. This project is built using React, Firebase, and Vite.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/instant-aberturas-app.git
   cd instant-aberturas-app
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:

   ```
   VITE_API_KEY=YOUR_API_KEY
   VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
   VITE_PROJECT_ID=YOUR_PROJECT_ID
   VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
   VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   VITE_APP_ID=YOUR_APP_ID
   VITE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
   ```

## Usage

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

## Features

- Browse products by categories
- View product details
- Add products to the cart
- Update product quantities in the cart
- Remove products from the cart
- Checkout process with order confirmation
- Persistent cart using local storage

## Project Structure

```plaintext
.
├── .env
├── .gitignore
├── [eslint.config.js]
├── [example.env]
├── [index.html]
├── [package.json]
├── public/
├── [README.md]
├── src/
│   ├── [App.jsx]
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── cartWidget/
│   │   │   │   └── [CartWidget.jsx]
│   │   │   ├── counter/
│   │   │   │   ├── [counter.css]
│   │   │   │   ├── [Counter.jsx]
│   │   │   │   └── [CounterContainer.jsx]
│   │   │   ├── productCard/
│   │   │   │   ├── productCard.css
│   │   │   │   └── [ProductCard.jsx]
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   │   └── [Footer.jsx]
│   │   │   ├── navbar/
│   │   │   │   ├── [Navbar.jsx]
│   │   │   │   └── [categories.js]
│   │   ├── pages/
│   │   │   ├── cart/
│   │   │   │   ├── [cart.css]
│   │   │   │   ├── [Cart.jsx]
│   │   │   │   └── [CartContainer.jsx]
│   │   │   ├── checkout/
│   │   │   │   ├── [checkout.css]
│   │   │   │   └── [Checkout.jsx]
│   │   │   ├── itemDetail/
│   │   │   │   ├── [itemDetail.css]
│   │   │   │   ├── [ItemDetail.jsx]
│   │   │   │   └── [ItemDetailContainer.jsx]
│   │   │   ├── itemListContainer/
│   │   │   │   ├── itemListContainer.css
│   │   │   │   ├── [ItemList.jsx]
│   │   │   │   └── [ItemListContainer.jsx]
│   ├── context/
│   │   └── [CartContext.jsx]
│   ├── [firebaseConfig.js]
│   ├── [index.css]
│   ├── [main.jsx]
│   ├── [productsMock.js]
├── [vercel.json]
├── [vite.config.js]
```
