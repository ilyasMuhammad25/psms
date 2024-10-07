import React from 'react';
import Image from 'next/image';

const MatchScheduleCard = ({ homeTeam, awayTeam, league, date, time, venue }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center border border-gray-200" style={{backgroundColor: '#06732a'}}>
      {/* Date on the left */}
      <div className="flex flex-col items-center mr-3 text-xs text-white">
       
        <span>{date}</span> <style></style>
        <span>{time}</span>
      </div>

      {/* Main content */}
      <div className="flex-grow px-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col items-center">
           <Image
              src={homeTeam.logo}
              alt={homeTeam.name}
              width={54}
              height={54}
            />
            <p className="mt-1 font-semibold text-xs text-white">{homeTeam.name}</p>
          </div>
          <div className="text-lg font-bold text-white">VS</div>
          <div className="flex flex-col items-center">
            <Image
              src={awayTeam.logo}
              alt={awayTeam.name}
              width={54}
              height={54}
            />
            <p className="mt-1 font-semibold text-xs text-white">{awayTeam.name}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-white-600 text-white">{league}</p>
        </div>
      </div>

      {/* Venue on the right */}
      <div className="flex flex-col items-center ml-3 text-xs text-white-600">
       
        <span className="text-center text-white">{venue}</span>
      </div>
    </div>
  );
};

export default MatchScheduleCard;