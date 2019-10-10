import React from 'react';
import './App.css';

const App = () => {
    const [showNotification, setShowNotification] = React.useState(false);

    if (showNotification) {
        return (
            <sunpietro-notification>
                <h3 slot="title">Hello 4Developers</h3>
                <p>It is great to be here!</p>
            </sunpietro-notification>
        );
    }

    return (
        <button type="button" onClick={() => setShowNotification(true)}>
            Show
        </button>
    );
};

export { App };
