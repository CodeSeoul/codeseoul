import React from 'react';

class MeetupPage extends React.Component {

  state={
    events : []
  }

  componentDidMount(){

    fetch("https://api.meetup.com/Learn-Teach-Code-Seoul/events")
    .then(res=>res.json())
    .then(events=>{
      this.setState({
        events : events
      })
    })
  }

  render(){
    return(      
      <div>Meetup page</div>
    )
  }
}

export default MeetupPage;