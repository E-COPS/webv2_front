import PropTypes from 'prop-types';
import styles from './Activity_Button.module.css';
import {Link} from 'react-router-dom';
/*Reversing 페이지로 가는 버튼*/

function Button({text}) {
  return(
    <button className={styles.btn}>
        click!
      <Link to=''>{text}</Link>
    </button>
  );
}

//prop-types
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
