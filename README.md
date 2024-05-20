# b2b-app 

This project is a website that implements a login page, consuming an API and then showing a page with the user informations. This project is part of the b2bit company challenge.

https://b2bit-app.vercel.app/

## How to run locally

```bash
git clone https://github.com/noefernandes/b2bit-app.git
cd b2bit-app
npm install
npm run dev
```

## The result

The following screenshots show the final state of the site's pages, paying attention to responsiveness for both desktops and smartphones.

<img src="https://github.com/noefernandes/b2bit-app/assets/36737390/f624289c-dcf7-48dd-80a5-79acbcad4173.png" alt="Image 1" align="center" style="width: 800px"/></td>
<img src="https://github.com/noefernandes/b2bit-app/assets/36737390/2a76262a-21f3-40b5-9d55-68da793572f9.png" alt="Image 2" align="center" style="width: 200px"/></td>

## Details of the project's non-functional requirements

| Checklist      | Done |
|----------------|------------------|
| Typescript | :white_check_mark: |
| ReactJS | :white_check_mark: |
| React Router | :white_check_mark: |
| Formik | :white_check_mark: |
| Interceptors | :white_check_mark: |
| Unit Tests | :white_check_mark: |
| Component Tests | :white_check_mark: |
| e2e Tests | :white_check_mark: |
| TailWind | :white_check_mark: |
| Deploy | :white_check_mark: |

About the tests:

- Unit tests were performed using the library Vitest, while e2e and component tests were performed using Cypress.
- A github actions pipeline runs the application build and testing process with each push.

The application is deployed to Vercel with each push.

## Functional requirements

### 1. As a user, I want to have a sign in page, so I can have access to my profile
Users can authenticate using their credentials, meanwhile the jwt tokens are stored in the browser's local storage.

![video 1 (online-video-cutter com)](https://github.com/noefernandes/b2bit-app/assets/36737390/0b5faaf5-e71b-4776-8176-de854d2fd23e)

### 2. As a user, I want the system to keep me signed in, so I don't need to put my credentials every time I open the system
As the access is still on the browsers local storage, the user does not need to login. The application will always allow the user access while the token is still valid.

![video 2](https://github.com/noefernandes/b2bit-app/assets/36737390/522893a4-6c63-4f2e-a6e5-ecc098c8e79f)

### 3. As a user, I want to have a feedback if I fill the wrong credentials, so I know that I did something wrong and I can fix it
In this case, formik deals with form errors, while submission errors are validated by an application function that expects to receive a valid access token.

![video 3](https://github.com/noefernandes/b2bit-app/assets/36737390/8181f526-5697-467a-9f91-1e9d7c5dfae0)

### 4. As a user, I want to have a home page with my profile, so I can see my personal info
The following gif shows the user page with all user informations displayed. Also you can see that the tokens were registered after the login.

![video 4](https://github.com/noefernandes/b2bit-app/assets/36737390/684a15ca-7c9a-4bad-9792-ea015fe09ff2)

### 5. As a user, I want to have a logout button, so when I am finished, I can log out of my account
The logout functionality works fine as well. After pressing the logout button, you can see that the tokens are removed from local storage and now the user needs to authenticate again if he wants to use the site.

![video 5](https://github.com/noefernandes/b2bit-app/assets/36737390/e9cb4747-5add-42e2-8ffe-449ca6bc46e4)

## Contributors

- Noé Fernandes
