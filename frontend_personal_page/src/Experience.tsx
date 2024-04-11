import React,  { useEffect, useState } from 'react'
import CustomCard from './Card'
import "./assets/experience.css"
import ExperienceData from "./experience.json"

function Experience() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(ExperienceData)
    }, [])
    return (
        <>
            <div className="experience__content">
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