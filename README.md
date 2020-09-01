# Ollie Test App

## Local Development with Docker

We'll use Docker for local development. Since we're not using databases or external local services that require their own Docker images, this is of limited value currently, but if we choose to add them on, then all the groundwork is there, and we can quickly add them into Docker Compose.

## Dependencies

You need Docker installed to run this app. You can download it [here](https://www.docker.com/get-started)

## Installation

Clone this repo, then run `docker-compose` from the project root.

    docker-compose up

## Architecture Decisions

### Next.JS

We'll use Next.JS for our front end framework. It wraps around React and gives us Static Rendering and Server Side Rendering if needed, which will be perfect fetching weather data from the API on the server rather than the client.

### TypeScript

Our data is coming from an external source, and this is where TypeScript really shines. We want to ensure that the incoming data is of a very specific shape so that it doesn't cause bugs in our app.

### Styled Components

We want our code to be as semantic as possible, so that others can read it easily. Styled Components helps us achieve this in the best possible way. In my opinion `<LocalWeatherTemp />` is much more readable than:

    <div class="local-weather-temp weather-detail">{data}</div>

### Formik

Using the Formik library in React applications is considered best practice, and we'll employ it in this app. Formik helps us perform validation, for which we use `Yup`, and also assists us in cleanly composing responses to error and loading states.

### Testing

Personally, I only believe in testing behavior, not UI. As such, we won't be testing that every component mounts and displays properly with Airbnb Enzyme, but rather will only use Jest to unit test pure functions that will return the same output for the same input, no matter how many times you run them.

### Linting & Code Formatting

Small code mistakes are inevitable - we're only human after all. Additionally, difficult to read code leads to even more mistakes. As such, we're going to use **ESLint** together with **Prettier** to ensure that our code is easy to read, and contains the least amount of bugs possible. We'll also use **Husky** to ensure that all code passes a linting test before being committed, and we'll use **Lint-Staged** to optimize the linting step so that only staged files are checked.

## Typeography

We'll use Google fonts:

-   Alata
-   Roboto

The should be called like so:

    font-family: 'Alata', sans-serif;
    font-family: 'Roboto', sans-serif;

## Design

Wireframes for our design have been provided by the team at Ollie. You can find them in the `/public` folder.

## Cookies

A cookie containing the form data will be updated on every keystroke. That way, if a User is mid-way through the form and needs to exit the tab or accidentally closes it down, all the data they entered will auto-populate when they open the App again. This improves UX, in my opinion.
