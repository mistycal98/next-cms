# Blog Rendering: ContentStack CMS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Features

- Every Page Server Side Rendered(NextJS-SSR)
- Individual Blog Page for Each Blog
- FontAwesome
- ContentStack CMS as Backend

# Implementation

- npx Next JS template ([getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) - SSR)
- BootStrap Implementation
  - [Bootstrap](https://getbootstrap.com/) Library(v5.0.0-beta-1) [npm package](https://www.npmjs.com/package/bootstrap)
  - react-bootstrap for JSX Components

# Downloading and Running on LocalHost

Clone the repository

```
$ git clone https://github.com/mistycal98/next-cms.git
```

Downloading Dependencies

```bash
$ npm i
# or
$ yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
.
├── components
│   ├── Aside.jsx
│   ├── BlogDetail.jsx
│   ├── Blogs.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── Navigation.jsx
├── fontawesome.js
├── next.config.js
├── package.json
├── pages
│   ├── about.js
│   ├── api
│   │   └── hello.js
│   ├── _app.js
│   ├── blogs
│   │   └── [hook].js
│   ├── blogs.js
│   ├── index.js
│   └── test.js
├── public
│   ├── 50001008.5332ba36.png
│   ├── favicon.ico
│   ├── medium.png
│   └── vercel.svg
├── README.md
├── stackConfig
│   └── stackinitialize.js
└── styles
    ├── app.scss
    ├── _bootstrap.scss
    ├── Icon.module.scss
    └── _variables.scss
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Live Hoiting]()