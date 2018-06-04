const data = require('../data/mind-complex-sample.json');
const Editor = require('../../src/index');
new Editor.Mind({
  defaultData: data,
  graph: {
    container: 'mountNode',
    height: window.innerHeight - 200
  }
});
