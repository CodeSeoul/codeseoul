import React from 'react';

class Modal extends React.Component{


    render(){

        if(!this.props.show)
        {
            return null
        }
        else{
            return(
                <div>
                {this.props.children}
                <button onClick ={()=>this.props.onClose()}>
                  Close
                </button>
                </div>
            )
        }
    }
}

export default Modal