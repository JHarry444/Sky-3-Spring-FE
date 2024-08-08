import { useEffect, useState } from "react";
import AddPerson from "./AddPerson";
import ViewPeople from "./ViewPeople";
import axios from "axios";

const PersonContainer = () => {
    const [people, setPeople] = useState([]);

    const getPeople = async () => {
        const { data } = await axios.get("http://localhost:8081/person/getAll");
        setPeople(data);
    }

    useEffect(() => {

    }, []);
    return (
        <>
            <AddPerson getPeople={getPeople} />
            <ViewPeople people={people} />
        </>
    );
}

export default PersonContainer;