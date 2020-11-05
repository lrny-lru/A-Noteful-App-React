import React from 'react';

const DefaultContext = React.createContext({
    updateStore: () => {},
    url: 'https://quiet-plains-10352.herokuapp.com/'
})

export default DefaultContext;
