(function(window) {
    'use strict';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { showNotification: false };
        }

        render() {
            if (this.state.showNotification) {
                return React.createElement('sunpietro-notification', {}, [
                    React.createElement(
                        'h3',
                        { slot: 'title', key: 'h3' },
                        'Hello 4Developers!'
                    ),
                    React.createElement(
                        'p',
                        { key: 'p' },
                        'It is great to be here!'
                    )
                ]);
            }

            return React.createElement(
                'button',
                { onClick: () => this.setState({ showNotification: true }) },
                'Show'
            );
        }
    }

    window.App = App;
})(window);
