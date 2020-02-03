import React from 'react';

interface iProps {
    name: string;
    company: string;
}

function HelloWorld(props: iProps) {
    console.log(props.name);

    return (
        <h1>Olá meu nome é Gabriel</h1>

    );
}

export default HelloWorld;