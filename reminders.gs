//Global variables
var EMAIL_SENT = "EMAIL_SENT"; //value used to check if reminder has already been sent.
var subject = "Reminder!"; //subject for the emails

/* These functions reads the specified sheet and creates arrays out of 3 columns of information
   for a certain number of rows, and uses the information in that array to send emails
   emails can be sent to phones via SMS */
function sendEmailsFridayEvent1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Send_Texts'); //specify sheet as Sent_Texts sheet
  var startRow = 3;  // First row of data to process
  var numRows = 14;   // Number of rows to process
  var dataRange = sheet.getRange(startRow, 20, numRows, 3) // Fetch the range of cells  (starting row, starting collumn, num of rows to process, num of coll to process)
  var data = dataRange.getValues();   // Fetch values in the Range.
  for (var i = 0; i < data.length; ++i) 
    var row = data[i];
    var emailAddress = row[0];  // First column - email address to send message to 
    var message = row[1];       // Second column - message to send in the email
    var emailSent = row[2];     // Third column - whether or not the message has already been sent
    if (emailSent != EMAIL_SENT) {  //  Checks to see if this reminder has already been sent to prevent sending duplicates      
      var subject = "Reminder!";	//Variable for Email subject
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 22).setValue(EMAIL_SENT); //sets the EMAIL_SENT value in Column C if email is successfully sent
      SpreadsheetApp.flush();  // Make sure the cell is updated right away in case the script is interrupted
    }
  }


function sendEmailsFridayEvent2() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Send_Texts');
  var startRow = 17;
  var numRows = 16;
  var dataRange = sheet.getRange(startRow, 20, numRows, 3)
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[0];
    var message = row[1];       
    var emailSent = row[2];     
    if (emailSent != EMAIL_SENT) {  
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 22).setValue(EMAIL_SENT);
      SpreadsheetApp.flush();
    }
  }
}

function sendEmailsFridayEvent3() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Send_Texts');
  var startRow = 33;  
  var numRows = 16;   
  var dataRange = sheet.getRange(startRow, 20, numRows, 3)
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[0];  
    var message = row[1];       
    var emailSent = row[2];     
    if (emailSent != EMAIL_SENT) {
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 22).setValue(EMAIL_SENT);
      SpreadsheetApp.flush();
    }
  }
}

