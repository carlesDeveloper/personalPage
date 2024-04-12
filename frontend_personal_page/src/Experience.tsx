import React,  { useContext, useEffect, useState } from 'react'
import CustomCard from './Card'
import "./assets/experience.css"
import ExperienceData from "./experience.json"
import { RouterContext } from './context/routerContext'

function Experience() {
    const {activeExperience} = useContext(RouterContext)
    const [data, setData] = useState([])
    useEffect(() => {
        setData(ExperienceData)
    }, [])
    return (
        <>
            <div className="experience__content" id='experience'>
                <div className="experience__title">Experience</div>
                <div className="experience__cards">
                    {data.length > 0 ? (
                        data.map(e => (
                            <>
                                <CustomCard
                                    title={e.company}
                                    dates={e.dates}
                                    content={e.description}
                                    img={e.logo}
                                    role={e.role}
                                    className={activeExperience ? 'card__animation' : ''}
                                />
                            </>
                        ))
                    ) : null}

                </div>

            </div>
        </>
    )
}

export default Experience;