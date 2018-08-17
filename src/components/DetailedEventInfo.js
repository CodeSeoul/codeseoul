import React from 'react'
import { DetailedEventInfoStyle } from '../styles/ShowingEvents'

const DetailedEventInfo = (props)=>{

    

    const {name, description, time, local_time, duration } = props.eventInfo
    

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
            <h1 className='title'>{name}</h1>
            <div>
            {new Date(time).toLocaleString('us-GB',{month : "short", day:"numeric"})} <t/>
            {local_time} ~ {new Date(time+duration).toLocaleString('en-GB',{hour:'numeric',minute:'2-digit'})}
            
            </div>
            <hr/>
            <div dangerouslySetInnerHTML={{__html:description}}></div>
            <div className='image-container'>
            {members}
            </div>
        </DetailedEventInfoStyle>
    )
}

export default DetailedEventInfo