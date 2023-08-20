import { useState } from "react";

function Objects(){
    const [person, setPerson] = useState({
        firstName: "Joel",
        lastName: "Nyongesa",
        email: "test@joel.com",
    });

    // Handle first name change.
    function handleFirstNameChange(e){
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }

    function handleLastNameChange(e){
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email: e.target.value
        })
    }
    

    return(
        <>
            <label>First Name: 
                <input value={person.firstName} onChange={handleFirstNameChange}/>
            </label> <br/><br/>

            <label>
                Last Name: 
                <input value={person.lastName} onChange={handleLastNameChange}/>
            </label> <br/><br/>

            <label> Email: 
                <input value={person.email}  onChange={handleEmailChange}/>
            </label>

            <p>
                {`${person.firstName} ${person.lastName} (${person.email})`}
            </p>
        </>
    )
}


export default Objects;