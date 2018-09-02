import React from "react";
import ShowContentBtn from "../../styles/helpers/ShowContentBtn";
class ToggleDisplay extends React.Component {
  state = { show: false };

  handleToggle = () => {
    if (this.props.isAuthenticated) {
      this.setState({
        show: !this.state.show
      });
    } else {
      console.log("hovering");
      alert("Login as Administrator to Create Events.");
    }
  };
  render() {
    const { buttonText, children, isAuthenticated } = this.props;
    let childrenWithHander = React.cloneElement(children, {
      handleToggle: this.handleToggle
    });
    //console.log('isAuthenticated', isAuthenticated);
    let content = !this.state.show ? (
      <ShowContentBtn isDisabled={!isAuthenticated} onClick={this.handleToggle}>
        {buttonText}
      </ShowContentBtn>
    ) : (
      childrenWithHander
    );
    return content;
  }
}

export default ToggleDisplay;
