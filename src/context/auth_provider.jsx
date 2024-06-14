import { AuthContext } from "./auth_context";
import { AuthReducer } from "./auth_reducer";

// const initialState = { logged: false, }

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [ AuthState, dispatch ] = useReducer( AuthReducer, {}, init );

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // Check if user is already logged in (e.g., check localStorage or an API)
    //     const storedUser = localStorage.getItem('user');
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

    const login = (userData) => {
        const action = {
            type: Types.login,
            payload: userData
        }

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(action);
    };

    const logout = () => {
        setUser(null);

        const action = {
            type: Types.logout
        }

        localStorage.removeItem('user');
        dispatch(action); 
        useHistory().push('/sign-in');
    };

    return (
        <AuthContext.Provider value={{ AuthState, login: login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}