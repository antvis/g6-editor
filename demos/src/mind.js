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
const minimap = new Editor.Minimap({
  container: 'minimap',
  height: 120,
  width: 200
});
editor.add(mind);
editor.add(minimap);
