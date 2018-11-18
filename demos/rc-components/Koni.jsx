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
import G6Editor from '../../src/';
import './koni.css';
const Util = G6Editor.Util;
G6Editor.Koni.registerNode('graph-model', {
  draw(item) {
    const group = item.getGraphicGroup();
    const label = this.drawLabel(item);
    const keyShape = this.drawKeyShape(item);
    this.drawIcon(item);
    label && Util.toFront(label, group);
    return keyShape;
  },
  drawIcon(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const { icon } = model;

    group.addShape('image', {
      attrs: {
        x: -7,
        y: -7,
        img: icon
      }
    });
  }
});

export default class Koni extends Editor {
  render() {
    const { curZoom, minZoom, maxZoom } = this.state;
    return <div className="editor">
      <ToolBar editor={this.editor} />
      <div style={{ height: '42px' }}></div>
      <div className="bottom-container">
        <Contextmenu editor={this.editor} />
        <Itempannel
          editor={this.editor}
          createItempannel = {container => {
            return new G6Editor.Itempannel({
              container,
              getItemModel(target) {
                return {
                  ...Util.clone(target.dataset),
                  icon: 'https://gw.alipayobjects.com/zos/rmsportal/zByaCkBKPacvgJqFgtwy.svg',
                  shape: 'graph-model',
                  labelOffsetY: 28
                };
              }
            });
          }}
          content={
            <div>
              <img draggable="false"
                src="https://gw.alipayobjects.com/zos/rmsportal/NKmorGEesOtYawmMJkhi.svg"
                data-type="node" data-size="40" data-color="#69C0FF" data-label="Bank" className="getItem" />
              <img draggable="false"
                src="https://gw.alipayobjects.com/zos/rmsportal/qXItsPCgijgVkgLiattJ.svg"
                data-type="node" data-size="40" data-color="#5CDBD3" data-label="Person" className="getItem"/>
              <img draggable="false"
                src="https://gw.alipayobjects.com/zos/rmsportal/msMyjRAdZvDOLOeimTYF.svg"
                data-type="node" data-size="40" data-color="#B37FEB" data-label="Country" className="getItem"/>
            </div>
          }
        />
        <Detailpannel
          editor={this.editor}
          content={
            <div>
              <div data-status="node-selected" className="pannel">
                <div className="pannel-title">节点</div>
              </div>
              <div data-status="edge-selected" className="pannel">
                <div className="pannel-title">边</div>
              </div>
              <div data-status="group-selected" className="pannel">
                <div className="pannel-title">组</div>
              </div>
              <div data-status="canvas-selected" className="pannel">
                <div className="pannel-title">画布</div>
              </div>
              <div data-status="multi-selected" className="pannel">
                <div className="pannel-title">多选</div>
              </div>
            </div>}
          />

        <Navigator
          editor={this.editor}
          curZoom = {curZoom}
          minZoom = {minZoom}
          maxZoom = {maxZoom}
          changeZoom = {this.changeZoom.bind(this)} />
        <Page editor={this.editor}
          createPage={container => {
            const height = window.innerHeight - 38;
            const koni = new G6Editor.Koni({
              graph: {
                container,
                height
              },
              align: {
                grid: true
              }
            });
            return koni;
          }}
        />
      </div>
    </div>;
  }
}
