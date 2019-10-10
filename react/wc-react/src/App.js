import React from 'react';
import './App.css';

const App = () => {
    const [showNotification, setShowNotification] = React.useState(false);
    const notification = React.useRef(null);

    React.useEffect(() => {
        if (!notification.current) {
            return;
        }

        notification.current.addEventListener(
            'close',
            () => setShowNotification(false),
            false
        );
    });

    if (showNotification) {
        return (
            <sunpietro-notification ref={notification}>
                <h3 slot="title">
                    Hello 4Developers from inside React component
                </h3>
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
