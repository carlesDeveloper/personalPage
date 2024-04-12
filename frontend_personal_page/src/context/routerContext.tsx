import React, { createContext, useState } from 'react'

export const RouterContext = createContext()

const RouterProvider = (props) => {
    const [activeAbout, setActiveAbout] = useState(true)
    const [activeExperience, setActiveExperience] = useState(false)
    const [activeSkills, setActiveSkills] = useState(false)
    const [activeContact, setActiveContact] = useState(false)

    return (
        <RouterContext.Provider 
            value = {{
                activeAbout, setActiveAbout,
                activeExperience, setActiveExperience,
                activeSkills, setActiveSkills,
                activeContact, setActiveContact
            }}
        >
            {props.children}
        </RouterContext.Provider>
    )
}
export default RouterProvider;