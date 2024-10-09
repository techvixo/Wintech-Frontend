"use client"

let isAuth;

if (typeof window !== 'undefined' && window.localStorage) {
  isAuth = localStorage.getItem("token");
  console.log('Token from localStorage:', isAuth);
} else {
  isAuth = null; // or handle the lack of localStorage in your own way
}

export default isAuth;