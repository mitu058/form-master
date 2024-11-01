
const SimpleForm = () => {
    const handelSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('from submitted')

    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="name" /><br /><br />
                <input type="email" name="email" /><br /><br />
                <input type="submit" value="submit" />
            </form>
           
        </div>
    );
};

export default SimpleForm;