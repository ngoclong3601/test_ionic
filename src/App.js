import React, {useEffect, useState} from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  IonModal,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  

} from '@ionic/react';


import {AddProduct} from './screen/add-product';
import {IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';
import Account from './screen/account';
import ListData from './screen/list'

function App() {
  
  return (
    <IonApp>
      <IonReactRouter>
        <IonContent>
            <IonTabs>
              <IonRouterOutlet>
                  <Route path="/" component={ListData}  exact={true}/>
                  <Route path="/account" component={Account} exact={true} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                  <IonTabButton tab="list" href="/">
                    <IonLabel>List</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="account" href="/account">
                    <IonLabel >Account</IonLabel>
                  </IonTabButton>
              </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonApp>
     
   
       


    
  );
  
}

export default App;
