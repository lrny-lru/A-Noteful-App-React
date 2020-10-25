import React from 'react';

const DefaultContext = React.createContext({
    updateStore: () => {},
    url: 'http://localhost:9090'
})

export default DefaultContext;