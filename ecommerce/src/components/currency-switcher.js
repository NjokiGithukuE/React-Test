import React from 'react';

function App() {
    return <Group630 src='.../public/group630.png' />;
}

export default App;

function Group630(props) {
    const { src } = props;

    return <img className='group-630' src={src} alt='' />
}