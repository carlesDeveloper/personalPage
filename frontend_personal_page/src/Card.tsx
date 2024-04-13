import { Card, CardBody, CardText } from 'reactstrap'
import "./assets/experience.css"
import { Experience } from './interfaces/Experience'

export default function CustomCard({ title, dates, content, img, role, className }:Experience ) {
    return (
        <Card className={className}>
            
            <CardBody>
                <div className="header__card">
                        <div className="logo__card">
                            <img src={img} className='card__icon'></img>
                        </div>
                        
                        <div className="role__card">{role}</div>
                        <div className="title__card">{title}</div>
                        <div className="dates__card">{dates}</div>
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