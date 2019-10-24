import React from 'react';
import './App.css';

const App = () => {
    const [showNotification, setShowNotification] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const refNotification = React.useRef(null);
    const title = isError ? 'Something went wrong!' : 'Everything is fine!';
    const message = isError ? 'Please contact with support' : 'Relax :)';
    const type = isError ? 'error' : 'success';
    const hideNotification = () => setShowNotification(false);
    const sampleCallback = () => console.log('sampleCallback');
    const handleNotificationClick = () => {
        console.log('click');

        refNotification.current.dispatchEvent(
            new CustomEvent('pass', { detail: { sampleCallback } })
        );
    };

    React.useEffect(() => {
        const notificationRoot = refNotification.current;

        if (!notificationRoot) {
            return;
        }

        notificationRoot.addEventListener('close', hideNotification, false);

        return () => {
            notificationRoot.removeEventListener('close', hideNotification);
        };
    });

    if (showNotification) {
        return (
            <sunpietro-notification
                ref={refNotification}
                type={type}
                onClick={handleNotificationClick}
            >
                <h3 slot="title">{title}</h3>
                <p>{message}</p>
            </sunpietro-notification>
        );
    }

    return (
        <div className="buttons">
            <button
                type="button"
                onClick={() => {
                    setIsError(false);
                    setShowNotification(true);
                }}
            >
                Show success
            </button>
            <button
                type="button"
                onClick={() => {
                    setIsError(true);
                    setShowNotification(true);
                }}
            >
                Show error
            </button>
        </div>
    );
};

export { App };
