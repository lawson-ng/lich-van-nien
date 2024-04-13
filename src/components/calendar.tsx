const THU = [
  "Chủ nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ 7",
];

const Calendar = () => {
  const renderDay = () => {
    const days = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = new Date(year, month, 1);
    const firstDayOfWeek = date.getDay();

    for (var i = 0; i < firstDayOfWeek; i++) {
      days.push(<td className="day"></td>);
    }
    while (date.getMonth() === month) {
      if (date.getDate() === today.getDate()) {
        days.push(
          <td
            className={
              "day text-center d-flex justify-content-center align-items-center"
            }
          >
            <p className="today m-0 mx-auto bg-danger rounded-circle text-center">
              {date.getDate()}
            </p>
          </td>
        );
      } else if (date.getDay() === 0 || date.getDay() === 6) {
        days.push(
          <td className={"day font-weight-bold text-warning"}>
            {date.getDate()}
          </td>
        );
      } else days.push(<td className={"day"}>{date.getDate()}</td>);

      date.setDate(date.getDate() + 1);
    }

    while (date.getDay() > 0) {
      days.push(<td className="day"></td>);
      date.setDate(date.getDate() + 1);
    }

    const data = [];
    for (let index = 0; index < days.length; index += 7) {
      data.push(<tr>{...days.slice(index, 7 + index)}</tr>);
    }
    return data;
  };

  return (
    <table className="shadow-lg mx-auto rounded-lg border">
      <tbody>
        <tr className="border bg-warning text-white">
          {THU.map((item) => (
            <th className="thu" key={Math.random()}>
              {item}
            </th>
          ))}
        </tr>
        {renderDay()}
      </tbody>
    </table>
  );
};

export default Calendar;
