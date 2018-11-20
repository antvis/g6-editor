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
import { Checkbox, Input, InputNumber } from 'antd';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import './baseFlowEditor.css';

export default class BaseFlowEditor extends Editor {
  componentDidMount() {
    super.componentDidMount();
    const editor = this.editor;
    const page = editor.getCurrentPage();
    page.changeAddEdgeModel({
      shape: 'flow-polyline-round'
    });
  }
  render() {
    const { curZoom, minZoom, maxZoom, selectedModel, inputingLabel } = this.state;
    const splitSize = selectedModel.size ? selectedModel.size.split('*') : '';
    const width = splitSize[0];
    const height = splitSize[1];
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
    const colorInput = (
      <div className="p">
      颜色：
        <ColorPicker
          animation="slide-up"
          className="color-picker"
          color={selectedModel.color}
          onClose={ ev => {
            this.updateGraph('color', ev.color);
          }}/>
      </div>);
    return <div className="editor">
      <ToolBar editor={this.editor} />
      <div style={{ height: '42px' }}></div>
      <div className="bottom-container">
        <Contextmenu editor={this.editor} />
        <Itempannel editor={this.editor} content={
          <div>
          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
            data-type="node" data-shape="flow-circle" data-size="72*72" data-color="#FA8C16" data-label="起止节点" className="getItem" />
          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg" data-type="node" data-shape="flow-rect" data-size="80*48" data-color="#1890FF" data-label="常规节点" className="getItem" />
          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg" data-type="node" data-shape="flow-rhombus" data-size="80*72" data-color="#13C2C2" data-label="分叉节点" className="getItem" />
          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg" data-type="node" data-shape="flow-capsule" data-size="80*48" data-color="#722ED1" data-label="模型节点" className="getItem" />
          </div>
        }/>
        <Detailpannel editor={this.editor} content={
          <div>
            <div data-status="node-selected" className="pannel">
              <div className="pannel-title">节点</div>
              <div className="block-container">
                {labelInput}
                <div className="p">
                  尺寸：
                  <InputNumber
                    size="small"
                    value={width} className="input width-input"
                    onChange={ value => {
                      const newSize = value + '*' + height;
                      selectedModel.size = newSize;
                      this.setState({
                        selectedModel
                      });
                      this.updateGraph('size', newSize);
                    } }/>
                  <InputNumber
                    size="small"
                    value={height} className="input height-input"
                    onChange={ value => {
                      const newSize = width + '*' + value;
                      selectedModel.size = newSize;
                      this.setState({
                        selectedModel
                      });
                      this.updateGraph('size', newSize);
                    } }/>
                </div>
                {colorInput}
              </div>
            </div>
            <div data-status="edge-selected" className="pannel" id="edge_detailpannel">
              <div className="pannel-title">边</div>
              <div className="block-container">
                {labelInput}
              </div>
            </div>
            <div data-status="group-selected" className="pannel" id="group_detailpannel">
              <div className="pannel-title">组</div>
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
            <div data-status="multi-selected" className="pannel" id="multi_detailpannel">
              <div className="pannel-title">多选</div>
              <div className="block-container">
                {colorInput}
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
