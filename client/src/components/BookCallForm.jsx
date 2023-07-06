import React from 'react';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';

function BookCallForm() {
    const styles = {
        container: {
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            // width: '75%',
            margin: '0 auto',
        },
        title: {
            fontSize: '20px',
            margin: '0 0 20px 0',
        },
        subtitle: {
            fontSize: '15px',
            margin: '0 0 40px 0',
        },
        message: {
            fontSize: '12px',
            margin: '0 0 20px 0',
        },
        widgetContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
    };

    return (
        <div style={{ width: '75%', margin: '0 auto' }}>
            <div>
                <div>
                    <h1 style={styles.title}>Book a Call</h1>
                    <h5 style={styles.subtitle}>
                        Select an available slot to get in touch with our mechanic to get the right product for the right price!
                    </h5>
                </div>
                <div>
                    <h3 style={styles.message}>Reach out to our sales representative right now to receive a free consultation.</h3>
                </div>
                <div style={styles.widgetContainer}>
                    <InlineWidget url="https://calendly.com/abrarhussain-00/30min" />
                </div>
            </div>
        </div>
    );
}

export default BookCallForm;
