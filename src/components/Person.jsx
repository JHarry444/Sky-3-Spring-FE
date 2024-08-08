const Person = ({ name, age, job }) => {
    return (<>
        <p>{`Name: ${name}`}</p>
        <p>{`Age: ${age}`}</p>
        <p>{`Job: ${job}`}</p>
    </>);
}

export default Person;