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

export default class Koni extends Editor {
  render() {
    const { curZoom, minZoom, maxZoom } = this.state;
    return <div className="editor">
      <ToolBar editor={this.editor} />
      <div style={{ height: '42px' }}></div>
      <div className="bottom-container">
        <Contextmenu editor={this.editor} />
        <Itempannel editor={this.editor} content={
          <div>
            <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg" data-type="node" data-shape="flow-circle" data-size="72*72" data-color="#FA8C16" data-label="起止节点" className="getItem" />
          </div>
        }/>
        <Detailpannel editor={this.editor} content={
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
          </div>
        }/>

        <Navigator
          editor={this.editor}
          curZoom = {curZoom}
          minZoom = {minZoom}
          maxZoom = {maxZoom}
          changeZoom = {this.changeZoom.bind(this)} />
        <Page editor={this.editor}
          createPage={container => {
            const height = window.innerHeight - 38;
            return new G6Editor.Koni({
              graph: {
                container,
                height
              },
              align: {
                grid: true
              }
            });
          }}
        />
      </div>
    </div>;
  }
}
