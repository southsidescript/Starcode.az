import './Fieldset.css'

const Fieldset = ({ id,legend}) => {

    return (
        <fieldset>
            <legend>{legend}</legend>
            <input type="text" id={id}/>
        </fieldset>
    )
}
export default Fieldset;