import { useCallback } from "react";
import { useState } from "react"

export const Todolist = () => {
  const today = {
    year: new Date().getFullYear(), // 이번연도
    month: new Date().getMonth()+1, // 이번달
    day: new Date().getDay(),// 이번달 요일
    date: new Date().getDate() // 오늘 날짜
  }
  
  const week = ['일', '월', '화', '수', '목', '금', '토']; // 일주일
  const [selectedYear, setselectedYear] = useState(today.year); // 현재 선택된 연도
  const [selectedMonth, setselectedMonth] = useState(today.month) // 현재 선택된 달

  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate
  // 선택된 연도, 달의 마지막 날짜

  const prevMonth = useCallback(() => { // 이전 달 보기 버튼
    if(selectedMonth === 1){
      setselectedMonth(12);
      setselectedYear(selectedYear - 1);
    }else {
      setselectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(()=>{ // 다음 달 보기 버튼
    if(selectedMonth === 12){
      setselectedMonth(1);
      setselectedYear(selectedYear + 1);
    }else {
      setselectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const monthControl = useCallback(()=>{ // 달 선택박스에서 고르기
    let monthArr = [];
    for(let i = 1; i <= 12; i++){
      monthArr.push(
        <option key={i} value={i}>
          {i}월
        </option>
      )
    }
  }, [selectedMonth])
  
  const yearControl = useCallback(()=>{// 연도 선택박스에서 고르기
    let yearArr = [];
    const startYear = today.year - 10;
    const endYear = today.year + 10;

    for(let i = startYear; i < endYear; i++){
      yearArr.push(
        <option key={i} value={i}>
          {i}년
        </option>
      )
    }
    
    return (
      <select
        className="yearselect"
        onChange={changeSelectYear}
        value={selectedYear}
      >
        {yearArr}
      </select>
    )
  },[selectedYear])

  const changeSelectMonth = (e) => {
    setselectedMonth(Number(e.target.value))
  }

  const changeSelectYear = (e) => {
    selectedYear(Number(e.target.value))
  }

  const returnWeek = useCallback(()=> { //요일 변환 함수
    let weekArr = [];
    week.forEach((v)=>{
      weekArr.push(
        <div
          key={v}//추가해야함
        >
          {v}
        </div>
      )
    })
    return weekArr;
  }, [])

  const returnDay = useCallback(()=> { // 선택된 달의 날짜들 반환 함쑤
    let dayArr = [];

    for(const nowDay of week){
      const day = new Date(selectedYear, selectedMonth -1, 1).getDay();
      if(week[day] === nowDay){
        for(let i = 1; i <= dateTotalCount; i++){
          dayArr.push(
            <div
              key={i}
            >
              {i}
            </div>
          );
        }
      }else {
        dayArr.push(<div className="weekday"></div>)
      }
    }
    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);
  
  return (
    <div className="container">
      <div className="title">
        <h3>{yearControl()}년 {monthControl()}월</h3>
        <button onClick={prevMonth}>◀︎</button>
        <button onClick={nextMonth}>▶︎</button>
      </div>
      <div className="week">{returnWeek()}</div>
      <div className="date">{returnDay()}</div>
    </div>
  );
};

export default Todolist;