import React from 'react';
import { Menu, Dropdown, Slider, Icon } from 'antd';
import G6Editor from '../../src/';
import PropTypes from 'prop-types';
import './navigator.css';

class Navigator extends React.Component {
  createMinimap(container) {
    return new G6Editor.Minimap({
      container,
      height: 120,
      width: 200
    });
  }
  getCreateMinimap() {
    const { createMinimap } = this.props;
    return createMinimap ? createMinimap : this.createMinimap;
  }
  componentDidMount() {
    const { editor } = this.props;
    const createMinimap = this.getCreateMinimap();
    const minimap = createMinimap(this.minimapContainer);
    editor.add(minimap);
  }
  sliderTipFormatter(num) {
    const { minZoom, maxZoom } = this.props;
    const zoom = Math.ceil(num * (maxZoom - minZoom) + minZoom * 100);
    return zoom + '%';
  }
  sliderChange(num) {
    const { minZoom, maxZoom, changeZoom } = this.props;
    changeZoom(num / 100 * (maxZoom - minZoom) + minZoom);
  }
  dropdownChange(ev) {
    const item = ev.item;
    const zoom = item.props.zoom;
    const { changeZoom } = this.props;
    changeZoom(Number(zoom));
  }
  render() {
    const { curZoom, minZoom, maxZoom } = this.props;
    const menu = (
      <Menu onClick={this.dropdownChange.bind(this)}>
        <Menu.Item zoom="0.5">50%</Menu.Item>
        <Menu.Item zoom="1">100%</Menu.Item>
        <Menu.Item zoom="1.5">150%</Menu.Item>
        <Menu.Item zoom="2">200%</Menu.Item>
      </Menu>
    );
    return (<div id="navigator">
      <div className="pannel-title">导航器</div>
      <div id="minimap" ref={el => { this.minimapContainer = el; }}></div>
      <div id="zoom-slider">
        <Slider value={ (curZoom - minZoom) / (maxZoom - minZoom) * 100 }
          className="slider"
          tipFormatter = { this.sliderTipFormatter.bind(this) }
          onChange = { this.sliderChange.bind(this) }
        />
        <Dropdown overlay={menu} >
          <a className="zoom-dropdown-btn" href="#">
            {Math.ceil(curZoom * 100)} %<Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </div>);
  }
}
Navigator.propTypes = {
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  curZoom: PropTypes.number,
  changeZoom: PropTypes.function,
  createMinimap: PropTypes.function,
  editor: PropTypes.object
};
export default Navigator;
