import React from 'react';
import MyInput from '../my-input/my-input.js';
import MyButton from '../my-button/my-button.js';
import MyLabel from '../my-label/my-label.js';

export default function App(){
    return <div data-testid="element-app">
                <MyLabel />
                <MyInput />
                <MyButton />
            </div>;
}