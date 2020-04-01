import * as url2 from '../img/stateLogo.png';
var doc = new jsPDF('p', 'mm', 'letter');
// letter paper w x h is 215.9mm x 279.4mm

var mealsFirst = 300;
var r2 = 27;
var mealsSecond = 12;
var mealsProgAdult = 10;
var totalPossibleMeals = 320;

doc.addImage(url2, 'PNG', 25, 5, 160, 30);

//picture box coords
// doc.rect(25, 5, 160, 30);

// form will be in here
//       L,  T,  w ,   h
doc.rect(25, 40, 160, 37);

doc.setFontSize(9);
doc.setFont("times");
doc.setFontType("bold");

doc.text('Name of Site:', 26, 44);

//vertical seperator
//      ((xPoint),(yPoint));
doc.line(140, 40, 140, 77);

doc.text('Date:', 141, 44);

// horizontal line to hold site name and date
doc.line(25, 52, 185, 52);

// 2nd section - meal stuff
doc.text('Meal: (circle one)', 26, 55.4);

doc.text('Breakfast', 36, 62);
doc.text('A.M. Snack', 53, 62);
doc.text('Lunch', 73, 62);
doc.text('P.M. Snack', 85, 62);
doc.text('Supper', 105, 62);

doc.text('Site Supervisor:', 141, 55.4);

// horizontal line to hold meal choices and site supervisor
doc.line(25, 65, 185, 65);

doc.text('Delivery Time:', 26, 69);

// vertical seperator
doc.line(55.4, 65, 55.4, 77);

doc.text('Total Meals Delivered/Prepared:', 56, 69);

// vertical seperator
doc.line(102, 65, 102, 77);

doc.text('Delivery Temperature:', 103, 69);

doc.text('Meal Service Time:', 141, 69);

doc.setFontSize(12);

doc.text('First Meals Served to Children', 19, 82);
doc.text('127', 180, 185)

doc.setFontSize(9);

//put lines through the served meals
var leftDistance, dayCount, b = 1;
var topDistance = 88;
doc.rect(17, 84, 180, 95);

for (numRows = 0; numRows < (totalPossibleMeals / 20); numRows++) {
  leftDistance = 20;

  for (i = b; i < (b + 20); i++) {
    dayCount = i.toString();
    doc.text(leftDistance, topDistance, dayCount);

    // horizontal line under each row
    doc.line(17, topDistance + 1, 197, topDistance + 1);

    if (dayCount > 300) {
      // vertical line between each day
      doc.line(leftDistance + 6, topDistance, leftDistance + 6, topDistance + 1);

    } else if (dayCount < 20) {
      // vertical line between each day
      doc.line(leftDistance + 6, topDistance - 4, leftDistance + 6, topDistance + 6);
    } else {
      doc.line(leftDistance + 6, topDistance, leftDistance + 6, topDistance + 6);
    }

    if (i <= mealsFirst) {
      doc.line(leftDistance - 1, topDistance + 1, leftDistance + 4, topDistance - 3);
    }
    leftDistance = leftDistance + 9;
  }
  b = i;
  topDistance += 6;
}

doc.text('Total First Meals Served:', 141, 185);

// second meals section

//doc.line(10, (topDistance + 2), 200, (topDistance + 2));
doc.text(12, (topDistance + 8), 'Complete Second Meals Served to Children:');
doc.rect(11, (topDistance + 10), 188.4, 6);

topDistance = topDistance + 14;
leftDistance = 13;

for (let j = 1; j < (r2 + 1); j++) {
  dayCount = j.toString();
  doc.text(leftDistance, topDistance, dayCount);
  doc.line(leftDistance + 4.3, topDistance - 4, leftDistance + 4.3, topDistance + 2);

  if (j <= mealsSecond) {
    doc.line(leftDistance - 1, topDistance + 1, leftDistance + 3, topDistance - 2);
  }
  leftDistance = leftDistance + 7;
}
doc.text('Total Second Meals Served to Children:', 123, topDistance + 7);

// NON REIMBURSABLE MEALS
doc.setFontSize(12);
doc.text('NON-REIMBURSABLE MEALS', 100, topDistance + 15, { align: 'center' });

doc.setFontSize(10);
doc.text('Meals Served to Program Adults:', 12, (topDistance + 18));

topDistance = topDistance + 25;
leftDistance = 13;
doc.rect(11, (topDistance - 4), 188.4, 6);
for (let k = 1; k < 28; k++) {
  dayCount = k.toString();
  doc.text(leftDistance, topDistance, dayCount);
  doc.line(leftDistance + 4.5, topDistance - 4, leftDistance + 4.5, topDistance + 2);
  if (k <= mealsProgAdult) {
    doc.line(leftDistance - 1, topDistance + 1, leftDistance + 3, topDistance - 2);
  }
  leftDistance = leftDistance + 7;
}
topDistance = topDistance - 7;
doc.text('Total Meals Served to Program Adults:', 123, (topDistance + 14));

doc.text('Meals Served to Non-Program Adults:', 12, (topDistance + 19));
topDistance = topDistance + 25;
leftDistance = 13;
doc.rect(11, (topDistance - 4), 188.4, 6);
for (let k = 1; k < 28; k++) {
  dayCount = k.toString();
  doc.text(leftDistance, topDistance, dayCount);
  doc.line(leftDistance + 4.5, topDistance - 4, leftDistance + 4.5, topDistance + 2);
  if (k <= mealsProgAdult) {
    doc.line(leftDistance - 1, topDistance + 1, leftDistance + 3, topDistance - 2);
  }
  leftDistance = leftDistance + 7;
}
topDistance = topDistance - 7;
doc.text('Total Meals Served to Non-Program Adults:', 123, (topDistance + 14));

doc.text('Total Meals Served:', 12, 255);
doc.text('Total Leftover Meals:', 55, 255);
doc.text('Total Damaged Meals:', 100, 255);
doc.text('Income From Adult Meals:', 147, 255);

doc.rect(12, 258, 188.4, 19);
doc.text(`Site Supervisor's Signature:`, 14, 262);

// vertical seperator
doc.line(140, 258, 140, 277);
doc.text('Date:', 142, 262);
