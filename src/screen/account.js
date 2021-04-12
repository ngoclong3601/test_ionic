import React from 'react';
import './account.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonApp
} from '@ionic/react';
import 'antd/dist/antd.css';

import { Button } from 'antd';

 const Account = () =>{
    return(
        <>
            <IonHeader>
            </IonHeader>
            <IonContent  >
                <div class="account" >
                    <ion-text  >17520710</ion-text>
                    <div style={{marginTop:"30px",}}>
                        <div style={{fontSize:"13px" }} >Số dư khả dụng</div>
                        <div class="text">
                            300,000,000 VNĐ
                        </div>
                    </div>
                    <div >
                        <button class="account-detail">Chi tiết</button>
                    </div>
                    <div class="history-payment">
                      
                      
                   </div>
                </div>
                
                  
                
                
                
            </IonContent>

        </>
    );
} 
export default Account;