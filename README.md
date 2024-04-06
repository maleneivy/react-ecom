# Omni-things - A React Ecom Application

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## A Noroff Course Assignment
This project is a Noroff CA, where the assignment was to build an eCom Store using React.

The following pages was required: 
* Homepage: 
  * List of all products
  * A look-ahead searchbar that filters products when typing product name.
  * Clicking on product sends you to the individual product page. 
  
* Individual product page: 
  * Displays chosen data for the product: title, image, description, reviews.
  * Add to cart button
  * disCountedPrice property to display price of product, and differences of price if there is discountedPrice. 
  
* Cart Page:
  * List of products with price and total.
  * Erase product from cart button.
  * Checkout button, goes to checkout success page.
  
* Success Page: 
  * Display message to user of success or not.
  * Link: Go back to store.
  * Clears the cart.

* Contact Page:
  * Form validation
  * console.log the data from inputs when submitting.

## Usage

### Running the Application

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.
4. After installation, run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the application.

### Building for Production

To build the application for production:

1. Ensure all changes are committed and pushed to your Git repository.
2. Run `npm run build`.
3. This command builds the app for production in the `build` folder.
4. It correctly bundles React in production mode and optimizes the build for the best performance.
5. The build is minified, and the filenames include the hashes.
6. Your app is now ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Using Components

If you're using this project as a library of components:

1. Install the package via npm: `npm install your-package-name`.
2. Import the desired components into your project.
3. Use the components in your application as needed.

## Dependencies used in the application
| Dependency            | Version    |
|-----------------------|------------|
| React                 | ^18.2.0    |
| React Scripts         | 5.0.1      |
| React Router Dom      | ^6.22.3    |
| React DOM             | ^18.2.0    |
| React Redux           | ^9.1.0     |
| Redux                 | ^5.0.1     |
| React Burger Menu     | ^3.0.9     |
| Reduxjs Toolkit       | ^2.2.2     |
| FontAwesome           | ^6.5.1     |
| React-Fontawesome     | ^0.2.0     |
| Styled Components     | ^6.1.8     |
| React Icons           | ^5.0.1     |


