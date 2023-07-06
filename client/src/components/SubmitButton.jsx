import PropTypes from 'prop-types';

const SubmitButton = ({ type, text }) => {
    return <button type={type}>{text}</button>;
};

SubmitButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SubmitButton;