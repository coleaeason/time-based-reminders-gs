/* This function creates time-driven triggers that trigger the email functions +/- 15min from the time specficied (usually 0-5 minutes early)
   Triggers are broken down by Day and by Event
   This function must be run by hand once. If you run it more than once you will have duplicate triggers that need to be deleted or it will try to send the mails twice, causing errors.
   Triggers can be deleted under the Resources > All Triggers tab above. */

function createFridayTriggers() {
    // On Friday at 6:15am
    var FridayWakeUps = ScriptApp.newTrigger('sendEmailsFridayEvent1') // Creates a new trigger that will run the function 'sendEmailsFridayEvent1'
      .timeBased() // Specifies this as a time based trigger
      .onWeekDay(ScriptApp.WeekDay.FRIDAY) // Specifies the day of the week the trigger should run on
      .atHour(6) // Specifies the time of day (0-23) the trigger should run
      .nearMinute(15) // Specifies the minute of the hour (0-59) the trigger should run
      .create(); // Creates the timer
  	// On Friday at 2:00pm
    var FridayEvalsEtc = ScriptApp.newTrigger('sendEmailsFridayEvent2')
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.FRIDAY)
      .atHour(14)
      .nearMinute(0)
      .create();
  	// On Friday at 2:30pm
    var FridayDiplomasProjects = ScriptApp.newTrigger('sendEmailsFridayEvent3')
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.FRIDAY)
      .atHour(14)
      .nearMinute(30)
      .create(); 
  
}
