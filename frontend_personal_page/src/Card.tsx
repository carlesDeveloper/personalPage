import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import "./assets/experience.css"

export default function CustomCard({ title, dates, content, img, role }) {
    console.log(img)
    return (
        <Card>
            
            <CardBody>
                <div className="header__card">
                    <CardTitle>
                        <img src={img} className='card__icon'></img>
                        {title}
                    </CardTitle>
                    <CardSubtitle>{role}{dates}</CardSubtitle>
                </div>
                
                <CardText>
                    <ul>
                        {content.map(c => (
                            <li>{c}</li>
                        ))}
                    </ul>
                </CardText>
            </CardBody>
        </Card>
    )
}