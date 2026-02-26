"use client";

import { useState, useEffect, type ChangeEvent } from "react";

export const DateCounter = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | number | undefined>(
    new Date(),
  );

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectedDate(new Date(e.target.value));
  };

  useEffect(() => {
    const dateWorker = new Worker(
      new URL("../app/workers/date-count.ts", import.meta.url),
    );
    dateWorker.postMessage({ init: true, date: selectedDate });
    dateWorker.onmessage = (event) => {
      const data = event.data;
      setDays(data.day);
      setHours(data.hou);
      setMinutes(data.min);
      setSeconds(data.sec);
      setSelectedDate(undefined);
    };
  }, [selectedDate]);

  const formatNumber = (str: string | number) =>
    str.toString().padStart(2, "0");

  return (
    <div className="fixed top-32 w-full h-12 z-50 bg-linear-to-t from-blue-600 to-blue-950 border-b-2 border-border">
      <div className="flex gap-4 items-center font-mono justify-center ">
        <div className="flex items-center p-4 w-22">
          <span>{formatNumber(days)}</span>
        </div>
        <span>:</span>
        <div className="flex items-center p-4 w-22">
          <span>{formatNumber(hours)}</span>
        </div>
        <span>:</span>
        <div className="flex items-center p-4 w-22">
          <span>{formatNumber(minutes)}</span>
        </div>
        <span>:</span>
        <div className="flex items-center p-4 w-22">
          <span>{formatNumber(seconds)}</span>
        </div>
      </div>
    </div>
  );
};
