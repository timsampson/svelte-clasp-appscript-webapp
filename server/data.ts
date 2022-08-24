// https://docs.google.com/spreadsheets/d/1bat23NflDM0iN-FvkeHRFddDApQhH6ZrEjgkpawOLbE
let schoolSpreadsheet = SpreadsheetApp.openById("1bat23NflDM0iN-FvkeHRFddDApQhH6ZrEjgkpawOLbE");
let studentSheet = schoolSpreadsheet.getSheetByName("students");
let studentValues: any[][] | [any, ...any[]];
let studentValuesAsObjArray: any[];

let staffSheet = schoolSpreadsheet.getSheetByName("staff");
let staffValues: any[][] | [any, ...any[]];
let staffValuesAsObjArray: any[];

let meritSheet = schoolSpreadsheet.getSheetByName("processed");
let meritValues: any[][] | [any, ...any[]];
let meritValuesAsObjArray: any[];

let meritLogSheet = schoolSpreadsheet.getSheetByName("merit_log");
let meritLogValues;
let homeroomSheet = schoolSpreadsheet.getSheetByName("homerooms");
let homeroomValues: any[][] | [any, ...any[]];
let homeroomValuesAsObjArray: any[];

function valuesToArrayOfObjects(sheetValues: any[][] | [any, ...any[]]) {
    // Use the spread operator to split the 2d array into headers and values
    const [headers, ...records] = sheetValues;

    //Loop through the values list
    const arrayOfObjects = records.map(records => {
        let objRecord = {};
        //Since each element in values list is a list again
        //loop through the list and add them to the `obj` object
        records.forEach((record: any, colIndex: string | number) => {
            objRecord[headers[colIndex]] = record
        });
        //return the object
        return objRecord;
    });
    return arrayOfObjects;
}
function getlogId(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
    let lastRecordRow = sheet.getLastRow() + 1;
    let formApplicationDate = new Date();
    let year = formApplicationDate.getFullYear();
    let day = formApplicationDate.getDate();
    let record_id = "id" + year + day + lastRecordRow + Math.floor(Math.random() * 10);
    return record_id;
}
// get user photo from google drive
//AdminDirectory.Users.Photos.get(email_address)
function getUserPhoto() {
    let userEmail = getUserEmail();
    let photo = AdminDirectory.Users.Photos.get(userEmail).photoData;
    return Utilities.base64EncodeWebSafe(photo).replace(/_/g, '/').replace(/-/g, '+');
}
