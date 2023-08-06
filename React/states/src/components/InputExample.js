import {useState} from 'react'


function InputExample() {

    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');

    // const onChangeName = (name) => setName(name.target.value)
    //  const onChangeSurname = (surname) => setSurname(surname.target.value);

    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (e) => {
        
        setForm({...form, [e.target.name]: e.target.value});
    }
  return (
    <div>
      <p>Name:</p>
      <input name="name" value={form.name} onChange={onChangeInput} />
      <p>Surname:</p>
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <p>
        Name : {form.name}
        <br />
        Surname: {form.surname}
      </p>
    </div>
  );
}

export default InputExample
