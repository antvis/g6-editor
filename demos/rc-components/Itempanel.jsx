import React from 'react';
import G6Editor from '../../src/';
import PropTypes from 'prop-types';
import './itempanel.css';

class Itempanel extends React.Component {
  createItempanel(container) {
    return new G6Editor.Itempanel({
      container
    });
  }
  getCreateItempanel() {
    const { createItempanel } = this.props;
    return createItempanel ? createItempanel : this.createItempanel;
  }
  componentDidMount() {
    const { editor } = this.props;
    const createItempanel = this.getCreateItempanel();
    const itempanel = createItempanel(this.itempanelContainer);
    editor.add(itempanel);
  }
  render() {
    return (
    <div className="itempanel" ref={el => { this.itempanelContainer = el; }}>
    {this.props.content}
    </div>);
  }
}
Itempanel.propTypes = {
  createItempanel: PropTypes.function,
  editor: PropTypes.object,
  content: PropTypes.node
};
export default Itempanel;
