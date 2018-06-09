"use strict";

console.log('activated')

let BLACK = '#252324'
let WHITE = '#fff';

let TEXT_ELEMENTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'a',
  'span',
  'code pre',
  'li'
]

let textElements = []

// Get all elements
TEXT_ELEMENTS.forEach((textEl) => {
  textElements.push(document.querySelectorAll(textEl))
})

// Filter out null/empty elements
textElements = textElements.filter(el => {
  return el.length !== 0;
})

let flattenedTextElements = []

textElements.forEach(el => {
  el.forEach(el => flattenedTextElements.push(el))
})

flattenedTextElements.forEach(el => el.style.color = WHITE);

