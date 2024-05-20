# b2b-app 

This project is a website that implements a login page, consuming an API and then showing a page with user information. This project is part of the b2bit company challenge.

https://b2bit-app.vercel.app/

## The result

<img src="https://github.com/noefernandes/b2bit-app/assets/36737390/f624289c-dcf7-48dd-80a5-79acbcad4173.png" alt="Image 1" align="center" style="width: 800px"/></td>
<img src="https://github.com/noefernandes/b2bit-app/assets/36737390/2a76262a-21f3-40b5-9d55-68da793572f9.png" alt="Image 2" align="center" style="width: 200px"/></td>

## Details of the project's non-functional requirements

|                | Checklist |
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

## Functional requirements

### 1. As a user, I want to have a sign in page, so I can have access to my profile
Users can authenticate using their credentials, meanwhile jwt tokens are stored in the browser's local storage.

![gif1](https://github.com/noefernandes/b2bit-app/assets/36737390/b3c09179-fcc3-4cb1-a045-e5d234dcd075)

### 2. As a user, I want the system to keep me signed in, so I don't need to put my credentials every time I open the system
As the access is still on the browsers local storage, the user does not need to login. The application will always allow the user access while the token is still valid.

![gif2](https://github.com/noefernandes/b2bit-app/assets/36737390/f768e000-c890-483e-804a-adf3f9badde1)

### 3. As a user, I want to have a feedback if I fill the wrong credentials, so I know that I did something wrong and I can fix it
In this case, formik deals with form errors, while submission errors are validated by an application function that expects to receive a valid access token.

![gif3](https://github.com/noefernandes/b2bit-app/assets/36737390/9dad4d2a-dc9f-4da8-850f-d6922d720cf4)

### 4. As a user, I want to have a home page with my profile, so I can see my personal info
The following gif shows the user page with all user information displayed. Also you can see that the tokens were registered after the login.

![gif4](https://github.com/noefernandes/b2bit-app/assets/36737390/ea060449-9e28-47f7-8d5b-8c79bebc5e91)

### 5. As a user, I want to have a logout button, so when I am finished, I can log out of my account

![gif5](https://github.com/noefernandes/b2bit-app/assets/36737390/244aa75b-1309-4852-83b9-30f03b97f97f)

The logout functionality works fine as well. After pressing the logout button, you can see that the tokens are removed from local storage and now the user needs to authenticate again if he wants to use the site.

## Contributors

- Noé Fernandes
