function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile()
  console.log(profile)
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance()
  auth2.signOut().then(function () {
    alert("You have been signed out successfully")
  })
}
