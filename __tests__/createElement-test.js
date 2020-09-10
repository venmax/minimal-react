
'use strict';

let React;
let ReactDOM;
let ReactTestUtils;

describe('CreateElement', () => {

  beforeEach(() => {
    jest.resetModules();
    React = require('../src/lib/offact').default;
  });

  afterEach(() => {
    // global.Symbol = originalSymbol;
  });
  
  test('createElement return a HTML Element', () => {
    const dom = React.createElement('div', {id: 'foo'});
    expect(Object.prototype.toString.call(dom)).toBe('[object HTMLDivElement]');
  });

  test('createElement return a HTML Element from custom Component', () => {
    function Piece() {
      return React.createElement('div', {id: 'foo'});
    };
    const dom = React.createElement(Piece);
    console.log(dom);
    expect(Object.prototype.toString.call(dom)).toBe('[object HTMLDivElement]');
  });
});