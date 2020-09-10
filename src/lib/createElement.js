"use strict";

function createElement(tag, attributes, ...children) {
  const element = reactElement(tag, attributes, ...children);
  return element;
};

function reactElement(tag, attributes, ...children) {
  let element = null;
  if (Object.prototype.toString.call(tag) === '[object Function]') {
    // is a functional component
    element = tag(attributes, ...children);
  } else {
    // is a html dom
    element = document.createElement(tag);
    for (let i in attributes) {
      if (attributes.hasOwnProperty(i)) {
        element.setAttribute(i, attributes[i]);
      }
    }
    for (let i in children) {
      if (children.hasOwnProperty(i)) {
        const item = children[i];
        if (typeof item === "string") {
          element.innerText = item;
        } else {
          element.appendChild(item);
        }
      }
    }
  }
  return element;
}

export default createElement;
