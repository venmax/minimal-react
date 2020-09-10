import offact from './lib/offact';

const Piece = function (props) {
  console.log(props);
  return (<div id="foo"><span>piece</span></div>);
};

const App = function () {
  return (<Piece id={123} config={{opt1: 'ss'}}/>)
};

offact.render(App, document.querySelector('#root'));
