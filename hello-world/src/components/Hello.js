import React from 'react';

function Hello(){
    // return (
    //     <div>
    //         <h1>Hello Mohan ji</h1>
    //     </div>
    // )

    return React.createElement('div',null, React.createElement('h1', null, 'Hello mohan ji'))
}

export default Hello;