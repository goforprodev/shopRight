import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonGrid, IonRouterOutlet, IonRow, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "./index.css"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// components
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ProductDetail from './pages/ProductDetail';

setupIonicReact();

interface LayoutProps{
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
  <IonContent >
        <div className="content">
          {children}
        </div>
      <div className="footer">
      footer
      </div>
  </IonContent>
  </>

);

const App: React.FC = () =>{
  return(
  <IonApp>
    <IonReactRouter>
        <Layout>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
             <Route exact path="/search">
          <SearchPage />
          </Route>
             <Route exact path="/product/:productId">
          <ProductDetail />
        </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            {/* Add more routes as needed */}
          </IonRouterOutlet>
        </Layout>
    </IonReactRouter>
  </IonApp>
);
  }

export default App;
