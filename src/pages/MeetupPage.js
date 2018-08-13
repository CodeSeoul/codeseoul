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
      <React.Fragment>
        <header>Meetup page</header>
        {/* Creating an event */}
        <section>
          Create an event
        </section>

        {/* Showing current events */}
        <section>
          <div>
            Current events
          </div>
          <div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default MeetupPage;