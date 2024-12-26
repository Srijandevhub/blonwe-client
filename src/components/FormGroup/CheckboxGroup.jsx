import styles from './FormGroup.module.css'
import Tick from '../../assets/tick.png'
const CheckboxGroup = ({ label, id, checked = false, onChange }) => {
    return (
        <div className={styles.formGroup}>
            <input id={id} type="checkbox" value={checked} onChange={(e) => onChange(!checked)} className={styles.checkInput}/>
            <label htmlFor={id} className={styles.checkLabel}><span className={styles.checkSpan}>{checked && <img src={Tick} alt='tick'/>}</span>{label}</label>
        </div>
    )
}

export default CheckboxGroup