import React from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,

} from '@ionic/react';
import  DataFetching from './DataFetching';


function App() {

  
  return (
    <div className="App">
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>News App v1.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
              <IonItem>
                <DataFetching/>
              </IonItem>
          </IonList>
        </IonContent>
    </IonApp>
    </div>
    
  );
  
}

export default App;
