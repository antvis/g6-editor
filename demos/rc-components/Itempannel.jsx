import React from 'react';
import G6Editor from '../../src/';
import PropTypes from 'prop-types';
import './itempannel.css';

class Itempannel extends React.Component {
  createItempannel(container) {
    return new G6Editor.Itempannel({
      container
    });
  }
  getCreateItempannel() {
    const { createItempannel } = this.props;
    return createItempannel ? createItempannel : this.createItempannel;
  }
  componentDidMount() {
    const { editor } = this.props;
    const createItempannel = this.getCreateItempannel();
    const itempannel = createItempannel(this.itempannelContainer);
    editor.add(itempannel);
  }
  render() {
    return (
    <div className="itempannel" ref={el => { this.itempannelContainer = el; }}>
    {this.props.content}
    </div>);
  }
}
Itempannel.propTypes = {
  createItempannel: PropTypes.function,
  editor: PropTypes.object,
  content: PropTypes.node
};
export default Itempannel;
