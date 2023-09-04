// THIS IS THE CODE OF APPOINTMENT
// To remove the default css of react-calender simply remove the Calender.css file
// and add custom styling to it

import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const Calender2 = () => {
  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState({
    '2023-06-25': ['9:00', '10:00'],
    '2023-06-26': [],
    '2023-06-27': ['11:00', '14:00', '16:00'],
    // Add more dates and times as needed
  });

  console.log(value)
  const handleDateChange = (value) => {
    onChange(value);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    // let month = `${d.getMonth() + 1}`; this line same as the above converting the value to string
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    // here day is string so lets say day = '26'.then day.length = 2 
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={value}
      />
      <h2>Available times for {formatDate(value)}</h2>
      {appointments[formatDate(value)] ? (
        appointments[formatDate(value)].length > 0 ? (
          appointments[formatDate(value)].map((time, index) => (
            <p key={index}>{time}</p>
          ))
        ) : (
          <p>No available times</p>
        )
      ) : (
        <p>No data for this date</p>
      )}
    </div>
  );
};

export default Calender2;