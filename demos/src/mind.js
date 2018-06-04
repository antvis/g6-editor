// canvas 转 2 进制 png -- end --
const $ = require('jquery');
const data = require('../data/mind-complex-sample.json');
const Editor = require('../../src/index');
const editor = new Editor();
const mind = new Editor.Mind({
  defaultData: data,
  graph: {
    container: 'graph',
    height: window.innerHeight - 200
  }
});
// const graph = mind.getGraph();
const contextmenu = new Editor.Contextmenu({
  container: 'contextmenu'
});
const toolbar = new Editor.Toolbar({
  container: 'toolbar'
});

editor.add(contextmenu);
editor.add(toolbar);
editor.add(mind);
editor.on('aftercommandexcute', () => {
  console.log(mind.save());
});
// 首次创建新脑图时，根节点进入编辑模式
mind.beginEditLabel(mind.getRoot().id);

$('#save_data').on('click', () => {
  console.log(JSON.stringify(mind.save(), null, '  '));
});

$('#save_image').on('click', () => {
  const imageCanvas = mind.saveImage();
  $('body').append(imageCanvas);
  const dataURL = imageCanvas.toDataURL('image/png');
  const link = document.createElement('a');
  const saveName = 'graph.png';
  link.download = saveName;
  link.href = dataURL.replace('image/png', 'image/octet-stream');
  link.click();
});

// 存储全展开图片
$('#save_expand_image').on('click', () => {
  const imageCanvas = mind.saveExpandImage();
  const dataURL = imageCanvas.toDataURL('image/png');
  const link = document.createElement('a');
  const saveName = 'graph.png';
  link.download = saveName;
  link.href = dataURL.replace('image/png', 'image/octet-stream');
  link.click();
});

// 读数据
$('#read_data').on('click', () => {
  mind.read(data);
});

$('#get_command').on('click', () => {
  console.log(editor.getCommands()); // 获取命令集
  console.log(editor.getCurrentCommand()); // 获取当前命令
});

// 调试用代码
// const tree = mind.getGraph();
mind.on('node:click', ev => {
  console.log(ev.item.getModel(), JSON.stringify(ev.item.getBBox()));
});
$('#show_hot_area').on('click', () => {
  if (mind.get('showHotArea')) {
    mind.hideHotArea();
  } else {
    mind.showHotArea();
  }
});
// editor.destroy();
// const saveData = tree.save().roots[0]
// Editor.Util.traverseTree(saveData, child=>{
//   delete child.id;
//   delete child.shape;
//   delete child.x;
//   delete child.y;
//   delete child.label;
//   delete child.index;
//   delete child.hierarchy;
//   delete child.parent;
// }, parent=>{
//   return parent.children;
// }, true);
// console.log(JSON.stringify(saveData, null, '  '));
