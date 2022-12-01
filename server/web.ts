function doGet() {
  let template = HtmlService.createTemplateFromFile("index");
  return template.evaluate();
}
function getAppScriptURL() {
  return ScriptApp.getService().getUrl();
}

function getUserEmail() {
  return Session.getActiveUser().getEmail();
}
// get user photo from Admin Service
//AdminDirectory.Users.Photos.get(email_address)
function getUserPhoto() {
  let userEmail = getUserEmail();
  let photo = AdminDirectory.Users.Photos.get(userEmail).photoData;
  return Utilities.base64EncodeWebSafe(photo).replace(/_/g, '/').replace(/-/g, '+');
}