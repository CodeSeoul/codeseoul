import React from 'react';
import ShowContentBtn from '../../styles/helpers/ShowContentBtn';
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
      <ShowContentBtn onClick={this.handleToggle}>{buttonText}</ShowContentBtn>
    ) : (
      childrenWithHander
    );
    return content;
  }
}

export default ToggleDisplay;
