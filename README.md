# MyReads Project

This is the second assessment project for Udacity's React Fundamentals course. That you have main page that didvided to thress section and you can move book from section to section.Also have search page by inter filter name then books result display in page. 

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains routing between component .
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksCategory.js # This is display books depend on action types
    ├── BooksUnit.js # This is display book details(image ,author,title) and used by search and category component
    ├── SearchBooks.js # This component to search in books by title or author name
    ├── icons # App images
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

 [`BooksAPI.js`](src/BooksAPI.js) using template file that contains three method:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
