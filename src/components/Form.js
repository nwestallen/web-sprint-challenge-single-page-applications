//Form component
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = props => {
    return(
        <form>
            <h2>Pls order pizza</h2>
            <label>Name: 
                <input id='nameInput' type='text' />
            </label>
            <label>Size:
                <select>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <div id='topping-options'>
                <p>Toppings</p>
                <label>
                    <input type='checkbox' />
                    Pepperoni
                </label>
                <label>
                    <input type='checkbox' />
                    Sausage
                </label>
                <label>
                    <input type='checkbox' />
                    Green Pepper
                </label>
                <label>
                    <input type='checkbox' />
                    Mushroom
                </label>
                <label>
                    <input type='checkbox' />
                    Onion
                </label>
            </div>
            <label>Special Instructions: 
                <input type='text' />
            </label>
            <button>Add to Order</button>
        </form>
    );
};

export default Form;