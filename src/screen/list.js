import React, {useEffect, useState} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import {useStoreState, useStoreActions} from 'easy-peasy';
import {
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonHeader,
    IonContent,
    IonModal,
    IonToolbar,
} from '@ionic/react';

import AddProduct from './add-product.js';

const ListData = () =>{
    const [showModal, setShowModal] = useState(false);

    const products = useStoreState((state )=> state.products);

    const {fetchProduct, remove}  = useStoreActions((actions) => ({
        fetchProduct: actions.fetchProduct,
        remove: actions.deleteProduct
      
      }));
    useEffect(() =>{
        fetchProduct();
    }, []);  

 
    return(
      <> 
        <IonHeader>
            <IonToolbar color="primary">
              <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <AddProduct/>
                <IonButton class="ion-bottom" onClick={() => setShowModal(false)}>Thoát</IonButton>
              </IonModal>
              <IonButton onClick={() => setShowModal(true)} color="success" class="ion-float-right">Thêm sản phẩm</IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
              <IonList>
              {
                products.map(item =>{
                  return (
                      <IonItem key={item.id}  >
                          <IonLabel >
                              <h3>{item.name}</h3>
                              <h4>{item.price}</h4>
                          </IonLabel>
                          <IonButton slot="end" color="danger" onClick={() => remove(item.id)}>
                            Xóa
                        </IonButton>
                      </IonItem>
                  )
                })
              }
            </IonList> 
          </IonContent>
             
      </>
    );

}
export default ListData;