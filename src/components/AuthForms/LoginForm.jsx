import { useState } from 'react'
import CheckboxGroup from '../FormGroup/CheckboxGroup'
import FormGroup from '../FormGroup/FormGroup'
import styles from './AuthForms.module.css'
const LoginForm = () => {
    const [rememberme, setRememberme] = useState(false);
    const handleRemebermeChange = (value) => {
        setRememberme(value);
    }
    return ( 
        <div className={styles.formWrapper}>
            <h1 className={styles.formHeading}>Login</h1>
            <p className={styles.formText}>If you have an account, sign in with your email address.</p>
            <FormGroup label={"Email Address"} required={true} type='email' id={"email"}/>
            <FormGroup label={"Password"} required={true} type='password' id={"password"}/>
            <CheckboxGroup label={"Remember me"} id={"rememberme"} checked={rememberme} onChange={handleRemebermeChange}/>
            <button className={styles.submitBtn}>Login</button>
        </div>
    )
}

export default LoginForm