'use strict';

function render(element, host) {
  let dom = null;
  if (Object.prototype.toString.call(element) === '[object Function]') {
    dom = element();
  }
  host.appendChild(dom);
}

export default render;
