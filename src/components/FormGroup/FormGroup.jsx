import styles from './FormGroup.module.css'
const FormGroup = ({ label, type = "text", required, onChange, value, id, reference }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.formLabel}>{label}{required ? "*" : ''}</label>
            <input type={type} value={value} id={id} onChange={(e) => onChange(e.target.value)} ref={reference} className={styles.formControl}/>
        </div>
    )
}

export default FormGroup