# Ollie Test App

## Local Development with Docker or NPM

You can use either Docker or NPM to run and view the app. Either way works.

The reasons I've added Docker is because machines differ and the versions of Node running on them is not always consistent. Docker solves this issue by creating a VM where languages and packages are all correctly versioned.

## Using NPM to Run and View the App

Run the following commands:

    npm install
    npm run dev

## Using Docker

If you want to use **Docker** instead of **NPM** to view this app, you will of course need it to be installed. You can download it [here](https://www.docker.com/get-started)

Run the following command from the project root:

    docker-compose up -d

## Architecture Decisions

### Next.JS

We'll use Next.JS for our front end framework. It wraps around React and gives us Static Rendering and Server Side Rendering if needed. It also offers us Serverless Functions in the form of API Routes, which we can use to send requests without worrying about CORS.

### TypeScript

TypeScript will enable us to avoid some common coding pitfalls. It will help to ensure that the data supplied to our components is of the expected shape and type.

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
