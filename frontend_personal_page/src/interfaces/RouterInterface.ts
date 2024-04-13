export interface RouterInterface{
    activeAbout: boolean;
    setActiveAbout: React.Dispatch<React.SetStateAction<boolean>>;
    activeExperience: boolean;
    setActiveExperience: React.Dispatch<React.SetStateAction<boolean>>;
    activeSkills: boolean;
    setActiveSkills: React.Dispatch<React.SetStateAction<boolean>>;
    activeContact: boolean;
    setActiveContact: React.Dispatch<React.SetStateAction<boolean>>;
}