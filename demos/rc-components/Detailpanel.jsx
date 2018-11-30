import React from 'react';
import G6Editor from '../../src/';
import PropTypes from 'prop-types';
import './detailpanel.css';

class Detailpanel extends React.Component {
  createDetailpanel(container) {
    return new G6Editor.Detailpanel({
      container
    });
  }
  getCreateDetailpanel() {
    const { createDetailpanel } = this.props;
    return createDetailpanel ? createDetailpanel : this.createDetailpanel;
  }
  componentDidMount() {
    const { editor } = this.props;
    const createDetailpanel = this.getCreateDetailpanel();
    const detailpanel = createDetailpanel(this.detailpanelContainer);
    editor.add(detailpanel);
  }
  render() {
    return (
    <div className="detailpanel" ref={el => { this.detailpanelContainer = el; }}>
      {this.props.content}
    </div>);
  }
}
Detailpanel.propTypes = {
  createDetailpanel: PropTypes.function,
  editor: PropTypes.object,
  content: PropTypes.node
};
export default Detailpanel;
