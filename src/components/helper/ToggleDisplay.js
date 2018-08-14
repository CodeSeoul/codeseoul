import React from 'react';

class ToggleDisplay extends React.Component {
  state = { show: false };

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { buttonText, children } = this.props;
    let childrenWithHander = React.cloneElement(children, {
      handleToggle: this.handleToggle
    });
    let content = !this.state.show ? (
      <button onClick={this.handleToggle}>{buttonText}</button>
    ) : (
      childrenWithHander
    );
    return content;
  }
}

export default ToggleDisplay;
