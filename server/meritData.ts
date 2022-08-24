type Merit = {
    id: string,
    timestamp: Date,
    incident_date: Date,
    student_id: string,
    homeroom: string,
    student_name: string,
    student_email: string,
    student_house: string,
    teacherEmail: string,
    teacher_name: string,
    subject: string,
    hr_teacher_id: string,
    hr_teacher_email: string,
    hr_teacher_name: string,
    category: string,
    type: string,
    attendance_details: string,
    merit_details: string,
    homework_details: string,
    all_details: string,
    notice_sent: string,
    assigned_department: string,
    assigned_to: string,
    assignee_reviewed: string,
    assignee_reviewed_date: Date,
    assignee_message: string,
    assignment_status: string,
    resolved: string,
    resolved_by: string,
    resolved_date: Date,
    resolved_message: string,
}

function getAllMeritCategories() {
    meritCategoriesValues = meritCategoriesSheet.getDataRange().getValues();
    let meritCategoriesData = valuesToArrayOfObjects(meritCategoriesValues);
    return meritCategoriesData;
}

let subjectsSheet = schoolSpreadsheet.getSheetByName("subjects");
let subjectsValues: any[][] | [any, ...any[]];
let subjectsValuesAsObjArray: any[];

function getAllSubjects() {
    subjectsValues = subjectsSheet.getDataRange().getValues();
    subjectsValuesAsObjArray = valuesToArrayOfObjects(subjectsValues);
    return subjectsValuesAsObjArray;
}

function getAllMeritInfo() {
    meritValues = meritSheet.getDataRange().getValues();
    let meritData = valuesToArrayOfObjects(meritValues);
    meritData.forEach((record, index) => {
        meritData[index] = JSON.stringify(record);
    });
    return meritData;
}

// To be used when a student looks up their own records
function getSingeUserMeritInfo() {
    meritValues = meritSheet.getDataRange().getValues();
    meritValuesAsObjArray = valuesToArrayOfObjects(meritValues);
    let studentMeritInfo = meritValuesAsObjArray.filter((merit: Merit) => merit.student_email == getUserEmail());
    studentMeritInfo.forEach((record, index) => {
        studentMeritInfo[index] = JSON.stringify(record);
    });
    return studentMeritInfo;
}

// To be used when an admin gets up a single user's records... might just do this filtered client side.
function getUserMeritInfoByEmail(email: string) {
    meritValues = meritSheet.getDataRange().getValues();
    meritValuesAsObjArray = valuesToArrayOfObjects(meritValues);
    let studentInfo = studentValuesAsObjArray.find((student: Student) => student.email == email);
    return studentInfo;
}