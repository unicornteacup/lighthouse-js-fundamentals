const whichSchool  = function (age) {
  let schoolType = "";

  if (age >= 13 && age < 18) {
    schoolType = "Secondary School";
  }else if (age >= 1 && age < 12) {
    schoolType = "Elementary School";
  }else{ 
    schoolType = "Lighthouse Labs";
  } 
  return schoolType; 
}