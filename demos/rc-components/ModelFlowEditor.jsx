/**
 * @fileOverview
 * @author huangtonger@aliyun.com
 */

import React from 'react';
import Navigator from './Navigator.jsx';
import ToolBar from './Toolbar.jsx';
import Contextmenu from './Contextmenu.jsx';
import Itempannel from './Itempannel.jsx';
import Detailpannel from './Detailpannel.jsx';
import Editor from './Editor.jsx';
import Page from './Page.jsx';
import { Checkbox, Input } from 'antd';
import G6Editor from '../../src/';
import './modelFlowEditor.css';

const { Flow } = G6Editor;

// 注册模型卡片基类
Flow.registerNode('model-card', {
  draw(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const width = 184;
    const height = 40;
    const x = -width / 2;
    const y = -height / 2;
    const borderRadius = 4;
    const keyShape = group.addShape('rect', {
      attrs: {
        x,
        y,
        width,
        height,
        radius: borderRadius,
        fill: 'white',
        stroke: '#CED4D9'
      }
    });
    // 左侧色条
    group.addShape('path', {
      attrs: {
        path: [
          [ 'M', x, y + borderRadius ],
          [ 'L', x, y + height - borderRadius ],
          [ 'A', borderRadius, borderRadius, 0, 0, 0, x + borderRadius, y + height ],
          [ 'L', x + borderRadius, y ],
          [ 'A', borderRadius, borderRadius, 0, 0, 0, x, y + borderRadius ]
        ],
        fill: this.color_type
      }
    });
    // 类型 logo
    group.addShape('image', {
      attrs: {
        img: this.type_icon_url,
        x: x + 16,
        y: y + 12,
        width: 20,
        height: 16
      }
    });
    // 名称文本
    const label = model.label ? model.label : this.label;
    group.addShape('text', {
      attrs: {
        text: label,
        x: x + 52,
        y: y + 13,
        textAlign: 'start',
        textBaseline: 'top',
        fill: 'rgba(0,0,0,0.65)'
      }
    });
    // 状态 logo
    group.addShape('image', {
      attrs: {
        img: this.state_icon_url,
        x: x + 158,
        y: y + 12,
        width: 16,
        height: 16
      }
    });
    return keyShape;
  },
  // 设置锚点
  anchor: [
    [ 0.5, 0 ], // 上面边的中点
    [ 0.5, 1 ] // 下边边的中点
  ]
});

// k 均值聚类
Flow.registerNode('k-means', {
  label: 'k 均值聚类',
  color_type: '#1890FF',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }], // 上面边的中点
    [ 0.5, 1, {
      type: 'output'
    }] // 下边边的中点
  ]
}, 'model-card');

// 随机森林
Flow.registerNode('random-forest', {
  label: '随机森林',
  color_type: '#9254DE',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// PS-SMART 分类
Flow.registerNode('PS-SMART', {
  label: 'PS-SMART 分类',
  color_type: '#1890FF',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.33, 1, {
      type: 'output'
    }],
    [ 0.66, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 朴素贝叶斯
Flow.registerNode('Bayes', {
  label: '朴素贝叶斯',
  color_type: '#9254DE',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/uZVdwjJGqDooqKLKtvGA.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 读数据表
Flow.registerNode('read-data-base', {
  label: '读数据表',
  color_type: '#FAAD14',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

export default class BaseFlowEditor extends Editor {
  componentDidMount() {
    super.componentDidMount();
    const editor = this.editor;
    const page = editor.getCurrentPage();
    // 输入锚点不可以连出边
    page.on('hoveranchor:beforeaddedge', ev => {
      if (ev.anchor.type === 'input') {
        ev.cancel = true;
      }
    });
    page.on('dragedge:beforeshowanchor', ev => {
      // 只允许目标锚点是输入，源锚点是输出，才能连接
      if (!(ev.targetAnchor.type === 'input' && ev.sourceAnchor.type === 'output')) {
        ev.cancel = true;
      }
      // 如果拖动的是目标方向，则取消显示目标节点中已被连过的锚点
      if (ev.dragEndPointType === 'target' && page.anchorHasBeenLinked(ev.target, ev.targetAnchor)) {
        ev.cancel = true;
      }
      // 如果拖动的是源方向，则取消显示源节点中已被连过的锚点
      if (ev.dragEndPointType === 'source' && page.anchorHasBeenLinked(ev.source, ev.sourceAnchor)) {
        ev.cancel = true;
      }
    });
  }
  render() {
    const { curZoom, minZoom, maxZoom, selectedModel, inputingLabel } = this.state;
    const labelInput = (
      <div className="p">
        名称：
        <Input
          size="small"
          className="input name-input"
          value = {inputingLabel ? inputingLabel : selectedModel.label}
          onChange = { ev => {
            this.setState({
              inputingLabel: ev.target.value
            });
          }}
          onBlur = { ev => {
            this.updateGraph('label', ev.target.value);
            this.setState({
              inputingLabel: null
            });
          }}
        />
      </div>
    );
    return <div className="editor">
      <ToolBar editor={this.editor} />
      <div style={{ height: '42px' }}></div>
      <div className="bottom-container">
        <Contextmenu editor={this.editor} />
        <Itempannel editor={this.editor} content={
          <ul>
            <li className="getItem" data-shape="k-means" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>K 均值聚类
            </li>
            <li className="getItem" data-shape="random-forest" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>随机森林
            </li>
            <li className="getItem" data-shape="PS-SMART" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>PS-SMART 分类
            </li>
            <li className="getItem" data-shape="read-data-base" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>读数据表
            </li>
            <li className="getItem" data-shape="Bayes" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>朴素贝叶斯
            </li>
          </ul>
        }/>
        <Detailpannel editor={this.editor} content={
          <div>
            <div data-status="node-selected" className="pannel" id="node_detailpannel">
              <div className="pannel-title">模型详情</div>
              <div className="block-container">
                {labelInput}
              </div>
            </div>
            <div data-status="group-selected" className="pannel" id="node_detailpannel">
              <div className="pannel-title">群组详情</div>
              <div className="block-container">
                {labelInput}
              </div>
            </div>
            <div data-status="canvas-selected" className="pannel" id="canvas_detailpannel">
              <div className="pannel-title">画布</div>
              <div className="block-container">
                <Checkbox onChange={ this.toggleGrid.bind(this) } >网格对齐</Checkbox>
              </div>
            </div>
          </div>
        }/>
        <Navigator
          editor={this.editor}
          curZoom = {curZoom}
          minZoom = {minZoom}
          maxZoom = {maxZoom}
          changeZoom = {this.changeZoom.bind(this)} />
        <Page editor={this.editor} />
      </div>
    </div>;
  }
}
