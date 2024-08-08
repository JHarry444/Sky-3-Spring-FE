import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Form = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const url = useLocation();
    useEffect(() => {
        setIngredients(searchParams.getAll("ingredient"))
    }, [searchParams]);

    console.log(new URLSearchParams(url.search));
    const [ingredients, setIngredients] = useState([]);
    return (<form onSubmit={e => {
        e.preventDefault();

        setSearchParams(sp => {
            sp.append("ingredient", e.target.ingredient.value);
            return sp;
        })
        setIngredients(i => [...i, e.target.ingredient.value]);
    }}>
        <label htmlFor="ingredient">ingredient</label>
        <input type="text" name="ingredient" id="ingredient" />
        <button>add</button>
        <br />
        {ingredients.map(i => <p>{i}</p>)}
    </form>);
}

export default Form;