import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {

    
        apiKey: "AIzaSyB33ump8XojMybXA_fyU0GS_Yze0sLO3GY",
        authDomain: "pruebaenclase-15104.firebaseapp.com",
        projectId: "pruebaenclase-15104",
        storageBucket: "pruebaenclase-15104.appspot.com",
        messagingSenderId: "312620601184",
        appId: "1:312620601184:web:6175c69017822a6e31d805"
      

};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
