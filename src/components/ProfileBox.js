import styles from './ProfileBox.module.css';
import PropTypes from 'prop-types';

function ProfileBox({text, img}) {
  return(
    <div className={styles.container}>
      <img className={styles.profileImg} src={img} alt='프로필 이미지'/>
      <text className={styles.profileText}>{text}</text>
    </div>
  );
}

//prop-types
ProfileBox.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProfileBox;