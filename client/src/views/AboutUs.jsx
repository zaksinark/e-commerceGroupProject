import React from 'react';
import ContactUsForm from '../components/ContactUsForm';
import BookCallForm from '../components/BookCallForm';

const AboutUs = () => {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
      padding: '20px',
    },
    topContainer: {
      position: 'relative',
      padding: '0',
      margin: '0',
    },
    helpText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      fontFamily: 'Impact, Arial, sans-serif',
    },
    '@media (max-width: 768px)': {
      helpText: {
        fontSize: '1.5rem',
      },
    },
    '@media (max-width: 480px)': {
      helpText: {
        fontSize: '1rem',
        marginTop: '8vh',
      },
    },
    section: {
      width: '100%',
      maxWidth: '500px',
      margin: '20px',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    },
    heading: {
      marginTop: '0',
    },
    paragraph: {
      marginBottom: '0',
    },
    image: {
      display: 'block',
      margin: '0 auto',
      width: '100%',
      height: 'auto',
    },
  };

  return (
      <div>
        <div style={styles.topContainer}>
          <img
            src="https://www.carparts.com/cld/image/upload/d_noimage.jpg,c_pad,f_auto,q_auto:eco,dpr_auto/w_1480/carparts/banners/hs-background_new"
            style={styles.image}
            alt='Background'
          />
          <h4 style={styles.helpText}>
            Let us help <b style={{color:'red'}}>YOU</b> buy the <b style={{ color: 'red' }}>right product </b>for the <b style={{ color: 'red' }}>right price</b>
          </h4>
        </div>
    
        <div style={styles.container}>
          <div style={styles.section}>
            <h1 style={styles.heading}>About Us</h1>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMJ3SD27mwbj4o4t2b9dheFxix8jsXjzw9w&usqp=CAU' style={styles.image} alt='About Us' />
            <p style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam ac bibendum pharetra, lacus nisl
              posuere lectus, non pretium eros justo at tortor. Nullam rutrum ligula quis nunc eleifend, eu bibendum lorem
              malesuada. Nullam sit amet eros sed sapien hendrerit bibendum. Donec aliquam interdum nulla ut imperdiet.
              Vestibulum vel molestie urna, eu rutrum arcu. Sed nec sapien a arcu auctor blandit.
            </p>
          </div>
          {/* <div>
            hello
          </div> */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Still have a question?</h2>
            <ContactUsForm />
          </div>
        </div>
      </div>
    );
    }    

export default AboutUs;
