/**
 * @fileOverview BPMN
 * 一般图编辑器，适用于展示一般的网络拓扑关系。
 * @author huangtonger@aliyun.com
 */

const G6Editor = require('../../../src/index');
const { Diagram, Util, Page } = G6Editor;

class BPMN extends Diagram {
  constructor(inputCfg) {
    const cfg = {
      graph: {
        modes: {
          default: [
            'panBlank', 'keydownCmdWheelZoom',
            'clickEdgeSelected', 'clickNodeSelected', 'clickCanvasSelected',
            'hoverNodeActived', 'hoverEdgeActived', 'hoverButton', 'wheelChangeViewport',
            'keydownShiftMultiSelected', 'panItem', 'hoverNodeShowArrowController',
            'hoverEdgeControlPoint', 'dragEdgeControlPoint'
          ],
          add: [ 'dragPanelItemAddNode', 'processAddEdge' ],
          readOnly: [ 'panCanvas' ],
          move: [ 'panCanvas' ],
          multiSelect: [ 'dragMultiSelect' ]
        },
        mode: 'default',
        defaultIntersectBox: 'rect',
        nodeDefaultShape: 'bpmn-base',
        edgeDefaultShape: 'bpmn-base'
      },
      arrowController: {
        thickness: 10,
        long: 40,
        controllers: []
      }
    };
    const mixinCfg = {};
    Util.mix(true, cfg, mixinCfg, inputCfg);
    super(cfg);
    this.isBPMN = true;
  }
  _init() {
    super._init();
    this._initArrowController();
  }
  _createArrowController(width, height) {
    const arrowControllers = this.get('arrowController').controllers;
    const dom = Util.createDOM('<div class="arrow">arrow</div>', {
      visibility: 'hidden',
      width: width + 'px',
      height: height + 'px'
    });
    dom.setAttribute('draggable', 'true');
    Util.addEventListener(dom, 'dragstart', () => {
      const item = dom.hoverNode;
      const addModel = {
        shape: 'bpmn-base',
        source: item.id
      };
      const box = item.getBBox();
      const delegation = this.getDelegation([{ isEdge: true }]);
      this.setSignal('dragEdge', true);
      this.beginAdd('edge', addModel);
      this.set('addEdgeConfig', {
        addModel,
        delegation,
        startPoint: {
          x: box.centerX,
          y: box.centerY
        },
        sourceItem: item
      });
      this.hideArrowController();
    });
    arrowControllers.push(dom);
    return dom;
  }
  showArrowController(hoverNode) {
    const arrowControllers = this.get('arrowController').controllers;
    arrowControllers.forEach(arrow => {
      arrow.show();
      arrow.hoverNode = hoverNode;
    });
  }
  hideArrowController() {
    const arrowControllers = this.get('arrowController').controllers;
    arrowControllers.forEach(arrow => {
      arrow.hide();
    });
  }
  _initArrowController() {
    const graph = this.getGraph();
    const graphContainer = graph.getGraphContainer();
    const arrowController = this.get('arrowController');
    const { thickness, long } = arrowController;
    // 生成箭头控件
    const topArrow = this._createArrowController(thickness, long);
    const bottomArrow = this._createArrowController(thickness, long);
    const leftArrow = this._createArrowController(long, thickness);
    const rightArrow = this._createArrowController(long, thickness);
    graphContainer.appendChild(topArrow);
    graphContainer.appendChild(bottomArrow);
    graphContainer.appendChild(leftArrow);
    graphContainer.appendChild(rightArrow);
    arrowController.topArrow = topArrow;
    arrowController.bottomArrow = bottomArrow;
    arrowController.leftArrow = leftArrow;
    arrowController.rightArrow = rightArrow;
  }
  bindEvent() {
    super.bindEvent();
    const graph = this.getGraph();
    // 移动节点前隐藏箭头控制器
    graph.on('beforepanitem', () => {
      this.hideArrowController();
    });

    // 视口发生变化隐藏箭头控制器
    graph.on('afterviewportchange', () => {
      this.hideArrowController();
    });
  }
}
Page.setRegister(BPMN, 'bpmn', 'diagram');
module.exports = BPMN;
