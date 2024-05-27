import { useState, useEffect, useMemo } from "react";
import dayjs from 'dayjs';
import '../App.css';

export default function CountDown() {
  const [_goalDate, _setGoalDate] = useState<string>('1970-01-01');
  const [time, setTime] = useState<any>(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(tick);
  });
  
  return (
    <>
        <input 
            placeholder='输入一个日期, 年月日以"-"分隔' 
            onChange={v => {
                _setGoalDate(v?.target?.value);
            }} 
        />
        <button 
            onClick={() => {
                setTime(dayjs(_goalDate).unix());
            }}
        >
            点击确认, 重新开始倒计时
        </button>
        <div className="timer">
            {dayjs(time * 1000).format('YYYY-MM-DD HH:mm:ss')}
        </div>
    </>
  );
}