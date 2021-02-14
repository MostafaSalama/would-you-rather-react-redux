import React, {useState, useEffect} from 'react';
import styles from './Login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthUser} from '../store/actions/action-creators';
import {useHistory, useLocation} from 'react-router-dom';
import {getInitialData, loginUser} from "../store/reducers";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const [username, setUser] = useState('sarahedo');
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const {authUser} = useAuth();
    useEffect(() => {
        dispatch(getInitialData());
    }, [dispatch]);
    if (authUser) {
        history.push('/');
    }
    function changeUser(e) {
        setUser(e.target.value);
    }

    function logUser() {
        dispatch(loginUser(username)).then(()=>{
            if (location.state) {
                history.push(location.state.from.pathname);
            } else {
                history.push('/');
            }
        })

    }

    return (
        <div>
            <div className={styles.loginContainer}>
                <h1>Sign In</h1>
                <div className={styles.form} onChange={changeUser}>
                    <select>
                        <option value="sarahedo">Sarah Edo</option>
                        <option value="tylermcginnis">Tyler Mcginnis</option>
                        <option value="johndoe">John Doe</option>
                    </select>
                    <button className="btn" onClick={logUser}>
                        LogIn
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Login;
