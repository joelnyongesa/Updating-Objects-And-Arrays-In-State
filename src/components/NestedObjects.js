import { useState } from "react";

function NestedObjects(){
    const [person, setPerson] = useState({
        name: "Joel Nyongesa",
        skills: {
            language: 'JavaScript',
            framework: 'React',
            logo: "https://images.pexels.com/photos/14111067/pexels-photo-14111067.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        }
    })

    function handleNameChange(e){
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    function handleSkilsLanguageChange(e){
        setPerson({
            ...person,
            skills:{
                ...person.skills,
                language: e.target.value
            }
        })
    }

    function handleSkillsFrameworkChange(e){
        setPerson({
            ...person,
            skills: {
                ...person.skills,
                framework: e.target.value
            }
        })
    }

    function handleSkillsLogoChange(e){
        setPerson({
            ...person,
            skills: {
                ...person.skills,
                logo: e.target.value
            }
        })
    }

    return(
        <>
            <label>Name: 
                <input value={person.name} onChange={handleNameChange}/>
            </label><br/><br/>
            <label> Programming language:
                <input value={person.skills.language} onChange={handleSkilsLanguageChange}/>
            </label> <br/><br/>

            <label>Framework: 
                <input value={person.skills.framework} onChange={handleSkillsFrameworkChange}/>
            </label><br/><br/>
            <label>Logo: 
                <input value={person.skills.logo} onChange={handleSkillsLogoChange}/>
            </label><br/><br/>
            <h3>Logo</h3>
            <img src={person.skills.logo} alt="Logo"/>

            <p>{`${person.name} loves ${person.skills.language} and has specialized in ${person.skills.framework}`}</p>
        </>
    )
}



export default NestedObjects;