'use client'

export default function calender() {
  const headers = ["월", "화", "수", "목", "금", "토", "일"]
  const first = ["", "", 1, 2, 3, 4, 5]
  const count = 5
  const dates = [
    ["", "", 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, "", ""],
  ];

  const circleSize = {
    display: "inline-block",
    width: "32px !important",
    height: "32px !important",
  }
  const changeRed = (date: number) => {
    if(date === 5 || date === 12 || date ===19 || date ===26) return "text-red-500"
  }
  const changeBlue = (date: number) => {
    if(date === 4 || date === 11 || date === 18 || date === 25) return "text-blue-500"
  }

  const calculateDDay = () => {
    // 현재 날짜를 한국 시간으로 설정
    const now = new Date();
    const koreaTimeOffset = 9 * 60 * 60 * 1000; // 9시간을 밀리초로 변환
    now.setTime(now.getTime() + koreaTimeOffset);

    // 목표 날짜를 한국 시간으로 설정
    const targetDate = '2025-01-11'; // 고정된 목표 날짜
    const target = new Date(targetDate);
    target.setTime(target.getTime() + koreaTimeOffset);

    // 날짜 차이 계산
    const timeDifference = target.getTime() - now.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 변환

    if(daysDifference - 1 === 0 ) return "오늘은 하루의 생일 입니다."
    if(daysDifference - 1 < 0 ) return <span>하루의 생일이 <span className="text-bl-9">{daysDifference - 1}</span>일 지났습니다.</span>
    return <span>하루의 생일이 <span className="text-bl-9">{daysDifference - 1}</span>일 남았습니다.</span>
  };
  return (
    <div className="flex justify-center flex-col mx-8">
      {/* <div className="text-center text-md font-serif h-12 border-b-1 border-blue-100">2025년 1월 11일 토요일</div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th className="text-center font-serif w-16 h-12" key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((date, dateIndex) => (
                <td className={`text-center font-serif w-16 h-12`} key={dateIndex}>
                  <span className={`${date === 18 ? `rounded-full bg-blue-100` : ""} leading-8 ${changeRed(Number(date))} ${changeBlue(Number(date))}`} style={circleSize}>{date}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="text-center font-serif text-xs mt-1">
        {calculateDDay()}
      </div>
    </div>
  );
}