import RootRoutes from './routes/routes';
import AuthProvider from './context/auth_provider';
import { ConfigProvider } from "antd";
import { firstColor50, secondColor70, secondColor40, fourthColor50, fifthColor } from './components/common/colors';
import './css/App.css'

function App() {
  return (
    <>
      
      <AuthProvider>

      <ConfigProvider
            theme={{
                token:{

                    colorPrimary: fifthColor,
                    colorInfo: secondColor70,
                    colorError: firstColor50,
                    colorSuccess: fourthColor50,
                    colorLink: secondColor40,
                    borderRadius: 4,
                }
            }}
      >
        <RootRoutes />
      </ConfigProvider>
        
      </AuthProvider>
      
    </>
  );
}

export default App;
