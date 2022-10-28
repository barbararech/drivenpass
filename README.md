# <p align = "center"> Drivenpass </p>

<p align="center">
   <img src="https://static.vecteezy.com/system/resources/previews/005/879/573/original/cyber-security-at-mobile-phone-concept-3d-illustration-icon-composition-with-password-on-screen-fingerprint-scanner-key-and-lock-in-shield-secure-access-illustration-for-modern-web-design-vector.jpg" width="600"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Bárbara_Rech-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/barbararech/drivenpass?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

An API project for you to manage your passwords for cards, wifis, safe-notes and much more!

## :computer: Technologies
  - Node.js
  - Typescript
  - JWT
  - PostgreSQL
  - Layered Architecture
  - Heroku
  - Vercel

## 🏁 Running the application

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository:

```
git clone https://github.com/barbararech/drivenpass
```

Inside the folder, run the following command to install the dependencies.

```
npm install
```

Run the following command to install the dev dependencies.

```
npm install prisma ts-node typescrypt @types/bcrypt @types/cors @types/cryptr @types/express @types/jsonwebtoken -D
```

Create database

```
npx prisma migrate dev
```

Then, run

```
npm start
```

to open the project on localhost in your browser.

:stop_sign: Don't forget to set the **environment variables**!

