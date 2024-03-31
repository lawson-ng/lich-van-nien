const Calendar = () => {
  const renderDay = (year: number, month: number) => {
    const today = new Date()
    var date = new Date(year, month - 1, 1);

    var calendar = "<table>";
    var firstDayOfWeek = date.getDay();

    var calendar = "<table>";
    calendar +=
      "<tr><th>Chủ Nhật</th><th>Thứ Hai</th><th>Thứ Ba</th><th>Thứ Tư</th><th>Thứ Năm</th><th>Thứ Sáu</th><th>Thứ Bảy</th></tr>";
    calendar += "<tr>";

    for (var i = 0; i < firstDayOfWeek; i++) {
      calendar += "<td></td>";
    }
    while (date.getMonth() + 1 === month) {
      if (date.getDate() === today.getDate()) {
        calendar += "<td class='bg-danger text-white'>" + date.getDate() + "</td>";
      } else {
        calendar += "<td>" + date.getDate() + "</td>";
      }

      if (date.getDay() === 6) {
        calendar += "</tr><tr>";
      }

      date.setDate(date.getDate() + 1);
    }

    while (date.getDay() > 0) {
      calendar += "<td></td>";
      date.setDate(date.getDate() + 1);
    }

    calendar += "</tr>";
    calendar += "</table>";
    return calendar;
  };
  return (
    <div dangerouslySetInnerHTML={{ __html: renderDay(2024, 3) }} />
  );
};

export default Calendar;
