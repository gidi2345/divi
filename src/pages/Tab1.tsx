import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Contacts } from '@capacitor-community/contacts'
import './Tab1.css';
import {useEffect, useState} from "react";


const Tab1: React.FC = () => {
    const [contacts, setContacts] = useState<any[]>([123456]);
    const [error, setError] = useState('');
    useEffect(() => {
        Contacts.getContacts().then(result => {
            for (const contact of result.contacts) {
                setContacts([...contacts, contact])
            }
        }).catch((err) => setError(err));
    },[contacts])

    const constantsDivs = () => {
        return contacts.map((contact, index) => <div key={index}>{contact}</div>)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          {constantsDivs()}
          <div>{error.toString()}</div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
