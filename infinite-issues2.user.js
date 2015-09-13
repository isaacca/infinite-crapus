// ==UserScript==
// @name        Infinite Titles
// @namespace   com.github.isaacca.infinite
// @include     https://campus.example.com/*
// @version     2
// @grant       none
// ==/UserScript==
//MAKE SURE TO UPDATE THE INCLUDE STATEMENT TO YOUR DISTRICT URL
var titles = [
  'Infinite Crapus',
  'Infinite Issues',
  'Infinite Garbage',
  'Infinite Eight',
  'Infinite Headaches',
  'Infinite Deletions',
  'Infinite Clicking',
  'Infinite Clutter',
  'Infinite $250,000',
  'Infinite <iframe>',
  'Infinite Abr',
  'Infinite Errors',
  'Infinite $170,000/yr',
  '∞ Issues',
];
document.title = titles[Math.floor(Math.random() * titles.length)];

