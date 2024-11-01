
const ReuseableFrom = ({formTitle,submitBtntext,handelSubmit,children}) => {

  const hanelLocalSubmit = e =>{
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        email:e.target.email.value,
        password: e.target.password.value
    }
    handelSubmit(data)
  }
    return (
        <div>
              {children}
            <h2>{formTitle}</h2>
              <form onSubmit={hanelLocalSubmit}>
                <input  type="text" name="name" /><br /><br />
                <input type="email" name="email" /><br /><br />
                <input type="password" name="password" /><br /><br />
                <input type="submit" value={submitBtntext} />
            </form>
        </div>
    );
};

export default ReuseableFrom;