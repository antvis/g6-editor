/**
 * @fileOverview bpmn
 * @author huangtonger@aliyun.com
 */
const BPMN = require('./bpmn');

// 注册 G6 图项图形
BPMN.registerNode('bpmn-base', {
  anchor: null
});

BPMN.registerEdge('bpmn-base', {
  /* draw */
});
