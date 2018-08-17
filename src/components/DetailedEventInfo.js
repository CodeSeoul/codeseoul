import React from 'react'
import {CurrentEventsSection} from '../styles/ShowingEvents'

const DetailedEventInfo = (props)=>{

    const {name, description, time, duration } =props.eventInfo

    return(
        <React.Fragment>
        <div>{name}</div>
        <div>{description}</div>
        <div>{time} {time+duration}</div>
        </React.Fragment>
    )
}

export default DetailedEventInfo