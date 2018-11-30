/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

const BPMN = require('./bpmn');
const G6Editor = require('../../../src/index');
require('./behaviour/');
require('./shape');
G6Editor.BPMN = BPMN;
module.exports = BPMN;
