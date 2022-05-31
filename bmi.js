function bmi(weight, height) {
  let bmiTotal = weight / height ** 2;
  if (bmiTotal <= 18.5) {
    return "Underweight";
  } else if (bmiTotal <= 25.0) {
    return "Normal";
  } else if (bmiTotal <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
