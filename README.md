# Frontend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


## Code Explanation  

Implemented using Angular 16

### Components

Use two components 
    
#### price-calculator component
    used this component for render form to submit product name,quantity.then retieve the result.
#### price-list component
    Used this compnent to list the price list of the selected product.

### Models

#### Product Interface

    Defines the structure of a product entity

#### PriceCalculation Interface

    Defines the structure of the price calculation response from the backend


### Service

#### PricingService

    fetching price calculations from the backend API

##### calculatePrice()

    Sends a GET request to calculate the price.
    GET /api/pricing/calculate (with parameters)

##### getPriceList()

    Fetches a list of price calculations for a selected product.
    GET /api/pricing/price-list?productName=<name>


### Styles

used globle styles and seperate styles for the components