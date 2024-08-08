import axios from "axios";
import { useRef, useState } from "react";

const AddPerson = ({ getPeople }) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [job, setJob] = useState("");

    const nameRef = useRef();
    return (<form onSubmit={async e => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8081/person/create", { name, age, job });
            setName("");
            setAge("");
            setJob("");
            getPeople();
            nameRef.current.focus();
        } catch (err) {
            console.error(err);
        }
    }}>
        <label htmlFor="nameInput">Name</label>
        <input type="text" name="name" id="nameInput" value={name} onChange={e => setName(e.target.value)} ref={nameRef} />
        <br />
        <label htmlFor="ageInput">Age</label>
        <input type="number" name="age" id="ageInput" value={age} onChange={e => setAge(parseInt(e.target.value))} min={18} />
        <br />
        <label htmlFor="jobInput">Job</label>
        <input type="text" name="job" id="jobInput" value={job} onChange={e => setJob(e.target.value)} />
        <br />
        <button type="submit">Add</button>
    </form>);
}

export default AddPerson;