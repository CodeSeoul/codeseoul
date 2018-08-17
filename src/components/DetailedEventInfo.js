import React from 'react'
import {CurrentEventsSection} from '../styles/ShowingEvents'

const DetailedEventInfo = (props)=>{

    const {name, description, time, duration } = props.eventInfo

    const members = props.rsvps.map(rsvp=>{
        return(
            <div>
            {rsvp.member.name}
            <img src = {rsvp.member.photo.photo_link}/>
            </div>
           
        )
    })

    return(
        <React.Fragment>
        <div>{name}</div>
        <div>{description}</div>
        <div>{time} {time+duration}</div>
        {members}
        </React.Fragment>
    )
}

export default DetailedEventInfo