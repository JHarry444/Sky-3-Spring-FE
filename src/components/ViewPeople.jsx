import Person from "./Person";

const ViewPeople = ({ people }) => {
    return people.map(({ name, age, job }) => (
        <Person name={name} age={age} job={job} />
    ));
}

export default ViewPeople;