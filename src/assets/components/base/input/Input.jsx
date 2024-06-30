function Input({ value, name, className, placeholder, onChange, id, type, error })
{
    return (
        <>
            <input value={ value } name={ name } className={ `form-control ${ className }` } placeholder={ placeholder } onChange={ onChange } id={ id } type={ type } />
            { error && <div className="form-text error">{ error.message }</div> }
        </>
    );
}

export default Input;;