const data = require('../data/mind-complex-sample.json');
const Editor = require('../../src/index');
const editor = new Editor();
const mind = new Editor.Mind({
  defaultData: data,
  graph: {
    container: 'mountNode',
    height: window.innerHeight - 38
  }
});
editor.add(mind);
