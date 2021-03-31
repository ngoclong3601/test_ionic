import React, { useEffect, useState } from 'react';
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
  IonInput

} from '@ionic/react';

import { useStoreState, useStoreActions } from 'easy-peasy';
import { AddProduct } from './screen/add-product'


function App() {
  const products = useStoreState((state) => state.products);
  const { fetchProduct, remove } = useStoreActions((actions) => ({
    fetchProduct: actions.fetchProduct,
    remove: actions.deleteProduct

  }));

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);


  const [inputName, setInputName] = useState('');
  const saveproduct = useStoreActions((actions) => actions.saveAddProduct)
  return (
    <IonApp>

      <IonHeader>
        <IonToolbar color="primary">

          <IonModal isOpen={showModal} cssClass='my-custom-class'>
            <AddProduct />
            <IonButton class="ion-bottom" onClick={() => setShowModal(false)}>Thoát</IonButton>
          </IonModal>
          <IonButton onClick={() => setShowModal(true)} color="success" class="ion-float-right">Thêm sản phẩm</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList class="ion-bottom12">
          {
            products.map((item, index) => {
              return (
                <IonItem key={index} >
                  <IonLabel >
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                  </IonLabel>
                </IonItem>
              )
            })
          }
        </IonList>
      </IonContent>
    </IonApp >






  );

}

export default App;
