import React from 'react';
import G6Editor from '../../src/';
import 'antd/dist/antd.css';
import './editor.css';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {}, // 当前选中项数据模型
      curZoom: 1, // 当前缩放比率
      minZoom: 0.5, // 最小缩放比率
      maxZoom: 2 // 最大缩放比率
    };
  }
  changeZoom(zoom) {
    const editor = this.editor;
    const page = editor.getCurrentPage();
    page.zoom(zoom);
  }
  toggleGrid(ev) {
    const editor = this.editor;
    const page = editor.getCurrentPage();
    if (ev.target.checked) {
      page.showGrid();
    } else {
      page.hideGrid();
    }
  }
  updateGraph(key, value) {
    const editor = this.editor;
    editor.executeCommand(() => {
      const page = editor.getCurrentPage();
      const selectedItems = page.getSelected();
      selectedItems.forEach(item => {
        const updateModel = {};
        updateModel[key] = value;
        page.update(item, updateModel);
      });
    });
  }
  componentWillMount() {
    this.editor = new G6Editor();
  }
  componentDidMount() {
    const editor = this.editor;
    const pages = editor.getComponentsByType('page');
    pages.forEach(page => {
      page.on('afteritemselected', ev => {
        this.setState({
          selectedModel: ev.item.getModel()
        });
      });
      page.on('afterzoom', ev => {
        this.setState({
          curZoom: ev.updateMatrix[0]
        });
      });
    });
    // 生成 G6 Editor 编辑器
    // const editor = new G6Editor();
    // const minimap = new G6Editor.Minimap({
    //   container: 'minimap',
    //   height: 120,
    //   width: 200
    // });
    // const toolbar = new G6Editor.Toolbar({
    //   container: 'toolbar'
    // });
    // const contextmenu = new G6Editor.Contextmenu({
    //   container: 'contextmenu'
    // });
    // const itempannel = new G6Editor.Itempannel({
    //   container: 'itempannel'
    // });
    // const detailpannel = new G6Editor.Detailpannel({
    //   container: 'detailpannel'
    // });
    // const page = this.createPage();
    // page.on('afteritemselected', ev => {
    //   this.setState({
    //     selectedModel: ev.item.getModel()
    //   });
    // });
    // page.on('afterzoom', ev => {
    //   this.setState({
    //     curZoom: ev.updateMatrix[0]
    //   });
    // });
    // editor.add(minimap);
    // editor.add(toolbar);
    // editor.add(contextmenu);
    // editor.add(itempannel);
    // editor.add(detailpannel);
    // editor.add(page);
    // this.page = page;
    // this.editor = editor;
  }
}
