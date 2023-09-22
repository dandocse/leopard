import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader >
          <IonToolbar>
          <IonGrid>
        <IonRow>
          <IonCol sizeMd='10' sizeSm='1'>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <div>ABABABABABAB</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
