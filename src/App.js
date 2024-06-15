import RootRoutes from './routes/routes';
import { AuthProvider } from './context';

function App() {
  return (
    <AuthProvider>

        <RootRoutes />

    </AuthProvider>
  );
}

export default App;
