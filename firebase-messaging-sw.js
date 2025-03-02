importScripts('https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBeZYHGbF8dua525GL8rvXVnrYJkFWHsQ8",
  authDomain: "nalam-hub-push-notification.firebaseapp.com",
  projectId: "nalam-hub-push-notification",
  storageBucket: "nalam-hub-push-notification.appspot.com",
  messagingSenderId: "503271584326",
  appId: "1:503271584326:web:8beff0c372e77010969047",
  measurementId: "G-3535LVDXRY"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
