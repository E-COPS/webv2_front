import PropTypes from 'prop-types';
import styles from './Recruitment_Button.module.css';
import { Link } from 'react-router-dom';

function Button({ text }) {
  return (
    // <Link
    //   to={{ pathname: 'https://ewhaecops.notion.site/E-COPS-12th-Recruiting-81f6ece018cd49b68eaa1997996213a8' }}
    //   target="_blank"
    // >
    <a href="https://ewhaecops.notion.site/E-COPS-12th-Recruiting-81f6ece018cd49b68eaa1997996213a8" target="_blank">
      <button className={styles.btn}>12기 지원하기 </button>
    </a>
  );
}

//prop-types
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
