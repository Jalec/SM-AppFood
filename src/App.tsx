import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Select from './pages/select';
import AddProduct from './pages/addProduct';
import ScanProduct from './pages/scanProduct';
import ProductDetail from './pages/productDetail';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="foodappM1">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>FoodApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/addProduct" routerDirection='none' lines='none'>
                <IonLabel>Productor</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/scanProduct" routerDirection='none' lines='none'>
                <IonLabel>Consumidor</IonLabel>
              </IonItem>
            </IonMenuToggle>

          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="foodappM1">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/select" component={Select} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/scanProduct" component={ScanProduct} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
