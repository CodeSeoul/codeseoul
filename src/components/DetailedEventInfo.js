import React from 'react'

const DetailedEventInfo = (props)=>{

    const {name, description, time, duration } = props.eventInfo

    const members = props.rsvps.map((rsvp, index)=>{
        return(
            <div key={index}>
            {rsvp.member.name}
            <img alt ='error' src = {rsvp.member.photo.photo_link}/>
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