const G6Editor = require('../../src/index');
const BPMN = require('./bpmn/');
const { Editor } = G6Editor;
const editor = new Editor();
const bpmn = new BPMN({
  graph: {
    container: 'mountNode',
    height: window.innerHeight - 38
  }
});
const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 200
  }, {
    id: 'node2',
    x: 300,
    y: 200
  }, {
    id: 'node3',
    x: 300,
    y: 260
  }],
  edges: [{
    id: 'edge1',
    target: 'node2',
    source: 'node1'
  }]
};
bpmn.read(data);
editor.add(bpmn);
