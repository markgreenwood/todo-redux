import React from 'react';

const { Component, PropTypes } = React;
const { log } = console;

class Inspector extends Component {
  constructor(props) {super(props);}
  componentWillMount() {
    log(this.props.name, '-- componentWillMount');
  }
  render() {
    log(this.props.name, '-- render');
    return this.props.children || <span/>;
  }
  componentDidMount() {
    log(this.props.name, '-- componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    log(this.props.name, '-- componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    log(this.props.name, '-- shouldComponentUpdate', nextProps, nextState);
  }
  componentWillUpdate(nextProps, nextState) {
    log(this.props.name, '-- componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    log(this.props.name, '-- componentDidUpdate', prevProps, prevState);
  }
  componentWillUnmount() {
    log(this.props.name, '-- componentWillUnmount');
  }
}

Inspector.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
};

export default Inspector;