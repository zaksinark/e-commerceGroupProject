import { quantitySelectorStyle } from '../assets/CartStyles.jsx';
import PropTypes from 'prop-types';

const QuantitySelector = ({initialQuantity}) => {
    const options = [];
    for (let i = 1; i <= 9; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    return (
        <select style={quantitySelectorStyle} defaultValue={initialQuantity}>
            {options}
        </select>
    );
};
QuantitySelector.propTypes = {
    initialQuantity: PropTypes.number.isRequired
    };

export default QuantitySelector;