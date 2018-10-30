import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed

// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// });

// //child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });




// database.ref('expenses').on('value', (snapshot)=> {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val() 
//         });
//     });
//     console.log(expenses);
// });

//  database.ref('expenses').once('value').then((snapshot)=> {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val() 
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Cookies',
//     note: 'Was goodd',
//     amount: 1234,
//     createdAt: 0
// });



//database.ref('notes/-LPuggvDMXdyAbhPbct7').remove()

// database.ref('notes').push({
//     title: 'todo',
//     body: 'runagain'
// });
// const firebaseNotes = {
//     notes: {
//         aksjdhasjd: { //random id keys
//             title: '123',
//             body: 'jaman'
//         },
//         asdaskjdh: {
//             title: '1233453453',
//             body: 'jamandgdg'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: '123',
//     body: 'jaman'
// },{
//     id: '15',
//     title: '1233453453',
//     body: 'jamandgdg'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const person = snapshot.val();
//     console.log(`${person.name} is a ${person.age} year old ${person.job.title} at ${person.job.company} in ${person.location.city}, ${person.location.country}. the stresslevel is ${person.stressLevel}` )
// }, (e) => {
//     console.log('Error fetching:',e)
// });

// setTimeout(() => {
//     database.ref().update({
//         age: 29,
//         'location/city' : 'Amsterdam',
//         'job/company' : 'MEWS',
//         stressLevel: 6
//     })
// }, 5000)
// // const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetiching data:' , e)
// });


// setTimeout(() => {
//     database.ref('age').set(25)
// }, 5000);

// setTimeout(() => {
//     database.ref().off('value',onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 9000)
// // database.ref('location/city').once('value')
// // .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('error fetching data', e);
// })
// database.ref().set({
//       name:'Lloyd Tan',
//       age: 26,
//       stressLevel: 6,
//       job: {
//          title: 'software developer',
//          company: 'google'
//       },
//       location: {
//           city: 'Amsterdam',
//           country: 'Netherlands'
//       }
     
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((error) => {
//     console.log('This failed: ', error)
// });

// database.ref().update({
//    stressLevel: 9,
//    'job/company' :'Amazon',
//    'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(()=> {
//     console.log('Item removed')
// }).catch((error) => {
//     console.log('Item not removed, ERror' , error)
// })
