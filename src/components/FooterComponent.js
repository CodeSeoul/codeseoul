import React from 'react';
import {Footer} from 'react-materialize';

const footerStyle = {
    position: 'absolute',
    bottom:0,
    width:'100%',
    height: 'auto',   /* Height of the footer */
    background: '#3aafa9'
}

const FooterComponent = () =>{
    return(
        <Footer style={footerStyle} copyrights="&copy; Code Seoul 2018"
     moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        }
        links={
            <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
        }
  className='example'
>
    <h5 className="white-text">Footer Content</h5>
    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>
    );
}

export {FooterComponent};