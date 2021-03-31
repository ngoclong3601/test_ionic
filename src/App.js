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
  IonInput

} from '@ionic/react';
import  DataFetching from './DataFetching';
import {useStoreState, useStoreActions} from 'easy-peasy';



function App() {
  const products = useStoreState((state )=> state.products);
  const {fetchProduct, remove}  = useStoreActions((actions) => ({
    fetchProduct: actions.fetchProduct,
    remove: actions.deleteProduct
  
  }));
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() =>{
      fetchProduct();
  }, []);

  
  const [inputName, setInputName] = useState('');
  const saveproduct = useStoreActions((actions) => actions.saveAddProduct)
  return (
    <IonApp>
       <IonHeader>
          <IonToolbar color="primary">
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
              <form >
                <IonItem>
                  <IonLabel position="default">Tên sản phẩm:</IonLabel>
                  <IonInput  type="text" id="name" name="name" onChange={(e) => setInputName(e.target.value)} value={inputName}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="default">Giá:</IonLabel>
                  <IonInput  type="text" id="price" name="price" onChange={(e) => setInputName(e.target.value)} value={inputName}></IonInput>
                </IonItem>
                <input type="submit" name="submit"   onClick={() => saveproduct(inputName)} />
              </form>
              <IonButton class="ion-bottom" onClick={() => setShowModal(false)}>Thoát</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)} color="success" class="ion-float-right">Thêm sản phẩm</IonButton>
          </IonToolbar>
      </IonHeader>
      <IonContent>
          {/* <DataFetching/> */}
          <IonList  class="ion-bottom12">
          {
            products.map(item =>{
              return (
                  <IonItem key={item.id} >
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
    </IonApp>
     
   
       


    
  );
  
}

export default App;
