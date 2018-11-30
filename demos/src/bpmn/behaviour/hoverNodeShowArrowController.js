const BPMN = require('../bpmn');

// 鼠标悬浮到节点显示箭头控件
BPMN.registerBehaviour('hoverNodeShowArrowController', bpmn => {
  const graph = bpmn.getGraph();
  const arrowControllerMargin = 20; // 箭头控件距节点的距离
  const arrowController = bpmn.get('arrowController');
  const { long, thickness } = arrowController;
  let hoverNode;
  graph.on('node:mouseenter', ev => {
    if (bpmn.getSignal('panningItem') || bpmn.getSignal('dragEdge')) {
      return;
    }
    const { topArrow, bottomArrow, leftArrow, rightArrow } = arrowController;
    hoverNode = ev.item;
    const bbox = hoverNode.getBBox();
    const tc = graph.getDomPoint({
      x: bbox.centerX,
      y: bbox.minY
    });
    const lc = graph.getDomPoint({
      x: bbox.minX,
      y: bbox.centerY
    });
    const bc = graph.getDomPoint({
      x: bbox.centerX,
      y: bbox.maxY
    });
    const rc = graph.getDomPoint({
      x: bbox.maxX,
      y: bbox.centerY
    });
    topArrow.css({
      top: tc.y - (long + arrowControllerMargin) + 'px',
      left: tc.x - thickness / 2 + 'px'
    });
    bottomArrow.css({
      top: bc.y + arrowControllerMargin + 'px',
      left: bc.x - thickness / 2 + 'px'
    });
    leftArrow.css({
      top: lc.y - thickness / 2 + 'px',
      left: lc.x - (long + arrowControllerMargin) + 'px'
    });
    rightArrow.css({
      top: rc.y - thickness / 2 + 'px',
      left: rc.x + arrowControllerMargin + 'px'
    });
    bpmn.showArrowController(hoverNode);
  });
  graph.behaviourOn('mousemove', ({ x, y }) => {
    if (!hoverNode) { return; }
    // 如果鼠标移出了箭头控件区域隐藏箭头控件
    const box = hoverNode.getBBox();
    const outterLong = long + arrowControllerMargin;
    const tl = {
      x: box.minX - outterLong,
      y: box.minY - outterLong
    };
    const br = {
      x: box.maxX + outterLong,
      y: box.maxY + outterLong
    };
    if (x < tl.x || y < tl.y || x > br.x || y > br.y) {
      bpmn.hideArrowController();
      resetStatus();
    }
  });
  function resetStatus() {
    hoverNode = undefined;
  }
});
