import React from 'react';
import G6Editor from '../../src/';
import PropTypes from 'prop-types';
import './detailpannel.css';

class Detailpannel extends React.Component {
  createDetailpannel(container) {
    return new G6Editor.Detailpannel({
      container
    });
  }
  getCreateDetailpannel() {
    const { createDetailpannel } = this.props;
    return createDetailpannel ? createDetailpannel : this.createDetailpannel;
  }
  componentDidMount() {
    const { editor } = this.props;
    const createDetailpannel = this.getCreateDetailpannel();
    const detailpannel = createDetailpannel(this.detailpannelContainer);
    editor.add(detailpannel);
  }
  render() {
    return (
    <div className="detailpannel" ref={el => { this.detailpannelContainer = el; }}>
      {this.props.content}
    </div>);
  }
}
Detailpannel.propTypes = {
  createDetailpannel: PropTypes.function,
  editor: PropTypes.object,
  content: PropTypes.node
};
export default Detailpannel;
