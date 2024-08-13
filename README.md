![Screenshot 2024-08-12 235100](https://github.com/user-attachments/assets/0b8422cd-5a43-4db9-8add-5a67d9c11fd1)

# TravelSphere - Travel and Accommodation Booking Platform

TravelSphere is a travel and accommodation booking platform that allows users to search for and book hotels. Moreover, it allows admins to manage the different aspects of the platform. <br />

**This project is built as the final project of my front-end internship at Foothill Technology Solutions.**

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/64c3cc36-99cf-4449-b3e7-b7c0338dc20a" alt="view" width=600/>
</div>

<br />

> [!NOTE]
> Login credentials:
>
> - **Normal User:** username: `user`, password: `user`
> - **Admin:** username: `admin`, password: `admin`

<br />

## ⚙️ Technologies Used

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** State management for modern apps with Redux.
- **React Query:** Data fetching, caching, and synchronization for React.
- **React Router:** Routing library for React applications.
- **Material-UI:** A popular React UI framework for building responsive web applications.

### Development Tools

- **Vite:** Next-generation frontend tooling for fast builds and development.
- **TypeScript:** Strongly typed programming language that builds on JavaScript.
- **ESLint & Prettier:** Linting and formatting tools to maintain code quality.
- **Husky & Lint-staged:** Git hooks for pre-commit checks.
<!-- - **Jest:** JavaScript testing framework. -->

### Data Visualization

- **ApexCharts:** A modern charting library to create dynamic visualizations.
- **React ApexCharts:** Integration of ApexCharts in React.

### Forms & Validation

- **Formik:** Form management in React with easy-to-use validation.
- **Yup:** Schema builder for value parsing and validation.

### Maps

- **Leaflet:** An open-source JavaScript library for mobile-friendly interactive maps.
- **React Leaflet:** React components for Leaflet maps.

### Animations

- **Framer Motion:** A production-ready motion library for React.
- **React Spring:** Spring-physics-based animation library for React.

### Other Libraries

- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **Moment:** Parse, validate, manipulate, and display dates and times.
- **Lottie React:** Render Lottie animations in React apps.
- **React Multi Carousel:** A flexible React carousel component.
- **React Spinners:** A collection of loading spinner components for React.

<br />

## 💻 Design patterns

This project leverages several design patterns to ensure modularity, reusability, and maintainability of the codebase. Below are some key patterns implemented:

### 1. Provider Pattern

The Provider Pattern is used extensively across the project to manage and pass down global state and contextual data. For example, in the `HotelCard` component, `HotelCardContext` is used to provide hotel data to its child components without prop drilling.

### 2. Compound Components Pattern

The Compound Components Pattern allows related components to be grouped together as part of a single parent component. This pattern is implemented in components like `HotelCard`, where subcomponents such as `DiscountChip`, `InfoCard`, `Heading`, `Description`, `Rating`, and `PriceSegment` are attached directly to the `HotelCard` component. This provides flexibility in composing UI elements. Here is an article that I find helpful in understanding the Compound Components Pattern: [Compound components - React](https://dev.to/bqardi/compound-components-react-1ag8).

### 3. Context API

The Context API is utilized throughout the project to share data and functions across components without having to pass props manually. This is especially useful in managing state and actions related to authentication, user preferences, and theming.

### 4. Custom Hooks

Custom React hooks are created to encapsulate reusable logic across the application. For example, custom hooks are used for data fetching with React Query like `useGetHotel` in `src/pages/Hotel/hooks` , form validation with Formik like `useAddHotelForm` in `src\pages\HotelsManagement\hooks`, and handling user authentication.

### 5. Higher-Order Components (HOCs)

Higher-Order Components (HOCs) are used to extend the functionality of existing components by wrapping them with additional logic. In this project, the `routeHOC` is utilized to handle access control based on user roles and dynamically set the document title for different pages. This pattern allows for the injection of role-based access checks and other enhancements, ensuring that only authorized users can view specific pages while maintaining a clean and modular codebase.

### 6. Container-Presenter Pattern

This pattern is used to separate the logic and data fetching responsibilities (Container) from the UI rendering responsibilities (Presenter). This helps in keeping the components clean, focused, and easier to test.

<br />

## 📥 Installation

1. Clone the repository

```bash
git clone
```

2. Install the dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

<br />

## ⭐ Pages & Features

### Landing Page

The Landing Page of TravelSphere offers a visually engaging introduction with sections for featured deals, inspiring imagery, and motivational content, guiding users through the platform’s key features and benefits.

https://github.com/user-attachments/assets/3e6a5d80-0b61-4e44-b7e9-e528bcf49550

<br />

### Authentication

Simple and smooth user authentication with username and password.

<div align="center">
    <img src="https://github.com/user-attachments/assets/9e5588c7-6476-4024-8850-9ba7ee91ff14" alt="login" width=450/>
</div>

<br />

### Normal User Features

#### Home Page

- Robust search functionality for hotels by location, check-in, and check-out dates and number of guests.
- Featured deals section showcasing special offers with hotel details and ratings.
- Trending destination highlights with engaging visuals.
- User's recently visited hotels with essential information.

https://github.com/user-attachments/assets/39d95b85-cd6b-4080-9fa1-f81972b6f0f1

<br />

#### Search Results Page

- Dynamic search results based on user input with filters for sorting and refining search results.
- Hotel cards displaying essential information like name, location, rating, price, and discounts.

<div align="center">
    <img src="https://github.com/user-attachments/assets/12a986cb-2bc6-4b78-aded-7504937f184f" alt="search" width=450/>
</div>

<br/>

_No results handling:_

<div align="center">
    <img src="https://github.com/user-attachments/assets/e69f58db-59c6-4a49-89b1-15192351d8cd" alt="no-results" width=450/>
</div>

<br />

#### Hotel Details Page

Detailed information about the hotel, including images, amenities, ratings, reviews, location with map integration, and rooms available.

[Hotel.webm](https://github.com/user-attachments/assets/ca760b17-06b9-4723-9bef-31569c0dcaa5)

<br />

#### Cart Page

- The list of selected hotels with the option to remove or confirm the booking.

<div align="center">
    <img src="http://github.com/user-attachments/assets/9f78f07e-39af-4b1b-87ef-2d727b3f1f3d" alt="cart" width=450/>
</div>

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/d4d6e74d-e131-42b8-9dd9-95179700ec91" alt="cart" width=450/>
</div>

<br />

#### Checkout Page

- Selected room details and booking form for user information and payment.
- Confirmation of booking with a success message and booking details within a printable post-checkout table.

<div align="center">
    <img src="https://github.com/user-attachments/assets/864b8ced-97b8-4558-8434-7b6f0eb5861d" alt="checkout" width=450/>
</div>

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/2930a3b4-b428-42cf-a196-f8d25c5a7f3b" alt="checkout" width=450/>
</div>

<br />

_Checkout in a room that is not added to the cart (e.g., by changing the route)_

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/97331e4c-12e0-4fac-aed6-6698f4859617" alt="checkout" width=450/>
</div>

<br />

### Admin Features

#### Home Page

_Note: the chart is static just to fill the white space._

<div align="center">
    <img src="https://github.com/user-attachments/assets/fce994ca-ceb6-43b6-9e59-f24ddcb6e188" alt="admin-home" width=450/> 
</div>

<br />

#### System Entities Management

- Navigation sidebar with links to manage cities, hotels, and users.
- Entities management pages displaying a list of entities within a table with multiple filters and sorting by clicking on the column headers.
- Ability to add, edit (by clicking on the entity's row), and delete entities.

#### Cities Management

<div align="center">
    <img src="https://github.com/user-attachments/assets/e3b494af-8582-4382-90ca-7da1ad17763d" alt="cities" width=450/>
</div>

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/6321952e-d860-4eaf-92e2-9c85aeb3ee0d" alt="cities" width=450/>
</div>

<br />

#### Hotels Management

<div align="center">
    <img src="https://github.com/user-attachments/assets/a9e9a975-a629-4d5f-86a8-5d0c91bd1e02" alt="hotels" width=450/>
</div>

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/78363499-ac3c-4b94-be6c-79d70188ceab"
    alt="hotels" width=450/>
</div>

<br />

#### Rooms Management

<div align="center">
    <img src="https://github.com/user-attachments/assets/cb1d776d-d12b-47ca-b6be-27a760b0c055" alt="rooms" width=450/>
</div>

<br />

<div align="center">
    <img src="https://github.com/user-attachments/assets/57dcb058-ca07-45bf-8833-afe623247514" alt="rooms" width=450/>
</div>

<br />

### General Pages

#### Error 404 Page

<div align="center">
    <img src="https://github.com/user-attachments/assets/52cdf50b-a861-4d87-9f81-b9a705513e75" alt="404" width=150/>
</div>

<br />

#### Access Denied Page

<div align="center">
    <img src="https://github.com/user-attachments/assets/a8cad39a-6056-49df-9af9-b45e5989c94d" alt="access-denied" width=150/>
</div>

<br />

#### Unauthenticated Page

<div align="center">
    <img src="https://github.com/user-attachments/assets/34b16109-f49c-4182-a6ec-acb03e21f4f8" alt="unauthenticated" width=150/>
</div>

<br />

## 🚀 Have a live look

You can check the live version of the project [here](https://travel-sphere.vercel.app/) or [here] (https://travel-sphere.netlify.app/)

<br />

## 🙏🏻 Acknowledgment

<div align="center">
    <img src="https://github.com/user-attachments/assets/0c7c4cf8-18a1-4b44-a946-e11223f76e4f" alt="acknowledgment" width=200/>
</div>

I would like to thank my trainers _Mohammad and Lara_ at Foothill Technology Solutions for all their guidance and support throughout the internship.

<br /><br />

##
<p align="center">
	✨ I'll be glad seeing your feedback, feel free to reach out! ✨
</p>
