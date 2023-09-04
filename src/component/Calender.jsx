// import React, { useState } from "react";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (args) => {
//     const selectedValue = args.value;
//     setSelectedDate(selectedValue);
//     console.log(selectedValue);
//   };

//   const disabledDate = (args) => {
//     if (args.date.getDay() === 0 || args.date.getDay() === 6) {
//       args.isDisabled = true;
//     }
//   };

//   return (
//     <div>
//       <CalendarComponent
//         value={selectedDate}
//         renderDayCell={disabledDate}
//         change={handleDateChange}
//       />
//       <p>Selected Date: {selectedDate.toDateString()}</p>
//     </div>
//   );
// };

// export default Calendar;




// import React, { useState } from "react";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (args) => {
//     const selectedValue = args.value;
//     setSelectedDate(selectedValue);
//     console.log(selectedValue);
//   };

 

//   return (
//     <div>
      
//       <CalendarComponent
//         value={selectedDate}
        
//         change={handleDateChange}
//       />
//       <p>Selected Date: {selectedDate.toDateString()}</p>

//       <div>
//         <div>
//             <label htmlFor="">timeslot 1</label>
//             <input type="checkbox" />
//         </div>

//         <div>
//             <label htmlFor="">timeslot 2</label>
//             <input type="checkbox" />
//         </div>

//         <div>
//             <label htmlFor="">timeslot 3</label>
//             <input type="checkbox" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;


import React, { useState, useEffect } from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);

  const handleDateChange = (args) => {
    const selectedValue = args.value;
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const allChecked = Array.from(checkboxes).every(
      (checkbox) => checkbox.checked
    );

    // Only update the selected date if not all checkboxes are checked
    if (!allChecked) {
      setSelectedDate(selectedValue);
    }

    console.log(selectedValue);
  };

  const handleCheckboxChange = (e) => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const allChecked = Array.from(checkboxes).every(
      (checkbox) => checkbox.checked
    );
    setAllCheckboxesChecked(allChecked);
  };

  useEffect(() => {
    if (allCheckboxesChecked) {
      setSelectedDate(null); // Disable the current date
    } else {
      setSelectedDate(new Date()); // Enable the current date
    }
  }, [allCheckboxesChecked]);

  return (
    <div>
      <CalendarComponent value={selectedDate} change={handleDateChange} />
      <p>Selected Date: {selectedDate ? selectedDate.toDateString() : ""}</p>

      <div>
        <div>
          <label htmlFor="timeslot1">Timeslot 1</label>
          <input
            type="checkbox"
            id="timeslot1"
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <label htmlFor="timeslot2">Timeslot 2</label>
          <input
            type="checkbox"
            id="timeslot2"
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <label htmlFor="timeslot3">Timeslot 3</label>
          <input
            type="checkbox"
            id="timeslot3"
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;



