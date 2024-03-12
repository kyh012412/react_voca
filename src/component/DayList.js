import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import dummy from "../db/data.json"
export default function DayList(){
    const days =  useFetch('http://localhost:3001/days');

    // const [days,setDays] = useState([]);

    // useEffect(()=>{
    //     console.log("Count change");
    //     fetch('http://localhost:3001/days')
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .then(data=>{
    //         setDays(data);
    //     });
    // },[]); 
    //의존성 배열이 변경되는 경우에만 useEffect함수가 실행
    //딱 한번만 실행되길 바라는 함수는 빈배열을 전달하면됨

    if(days.length === 0 ){
        return <span>Loading...</span>
    }

    return (
    <>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                    Day {day.day}
                    </Link>
                </li>
            ))}
        </ul>
    </>
    );
}