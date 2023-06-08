 // Initialize Firebase
 var firebaseConfig = {
    // Your Firebase project configuration
    // ...
  };
  firebase.initializeApp(firebaseConfig);

  // Get login form and add submit event listener
  var loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // User successfully logged in
        var user = userCredential.user;
        // Do something, e.g., redirect to a different page
      })
      .catch(function(error) {
        // Handle login errors
        var errorCode = error.code;
        var errorMessage = error.message;
        // Display error message to the user
      });
  });