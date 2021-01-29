//Form component
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    border: 3px solid black;
    width: 300px;

    .error {
        color: red;
        font-size: 10px;
    }
`;

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required('Must include name for order')
    .min(2, 'Must be at least 2 characters long'),
    size: Yup
    .string(),
    pepperoni: Yup
    .boolean(),
    sausage: Yup
    .boolean(),
    mushroom: Yup
    .boolean(),
    greenPepper: Yup
    .boolean(),
    onion: Yup
    .boolean(),
    notes: Yup
    .string()
})

const Form = props => {

    const { cart, setCart } = props;

    const[orderItem, setOrderItem] = useState({name:'',size:'',pepperoni:false,sausage:false,mushroom:false,greenPepper:false,onion:false,notes:''});
    const[disabled, setDisabled] = useState(true)
    const[errors, setErrors] = useState({
        name:''
    })

    useEffect(() => {
        formSchema.isValid(orderItem).then(valid => setDisabled(!valid));
    }, [orderItem])

    const handleChange = event => {
        const { name, type, value, checked } = event.target

        Yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}));

        if(type === 'checkbox'){
            setOrderItem({...orderItem, [name]: checked})
        } else {
            setOrderItem({...orderItem, [name]: value})
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .post('https://reqres.in/api/order', orderItem)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return(
        <StyledForm onSubmit={handleSubmit}>
            <h2>Pls order pizza</h2>
            <label>Name: 
                <input type='text' name='name' value={orderItem.name} onChange={handleChange} />
                {errors.name.length > 0 && <p className='error'>{errors.name}</p>}
            </label>
            <label>Size:
                <select name='size' value={orderItem.size} onChange={handleChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <div id='topping-options'>
                <p>Toppings</p>
                <label>
                    <input type='checkbox' name='pepperoni' value={orderItem.pepperoni} onChange={handleChange} />
                    Pepperoni
                </label>
                <label>
                    <input type='checkbox' name='sausage' value={orderItem.sausage} onChange={handleChange}/>
                    Sausage
                </label>
                <label>
                    <input type='checkbox' name='greenPepper' value={orderItem.greenPepper} onChange={handleChange}/>
                    Green Pepper
                </label>
                <label>
                    <input type='checkbox' name='mushroom' value={orderItem.mushroom} onChange={handleChange}/>
                    Mushroom
                </label>
                <label>
                    <input type='checkbox' name='onion' value={orderItem.onion} onChange={handleChange}/>
                    Onion
                </label>
            </div>
            <label>Special Instructions: 
                <input type='text' name='notes' value={orderItem.notes} onChange={handleChange}/>
            </label>
            <button disabled={disabled}>Add to Order</button>
        </StyledForm>
    );
};

export default Form;