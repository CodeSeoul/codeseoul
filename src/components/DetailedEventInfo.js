import React from 'react'
import { DetailedEventInfoStyle } from '../styles/ShowingEvents'

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
        <DetailedEventInfoStyle>
            <div className='title'>{name}</div>
            <div>{description}</div>
            <div>{time} {time+duration}</div>
            <div className='image-container'>
            {members}
            </div>
        </DetailedEventInfoStyle>
    )
}

export default DetailedEventInfo