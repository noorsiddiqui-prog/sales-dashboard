'use client';

import Image from 'next/image';
import React from 'react';

type CountryStatsProps = {
  countryName: string;
  countryCode: string; // ISO 2-letter code like "us", "in"
  userCount: string;
  percent: number;
  progressColor?: string;
};

const CountryStats: React.FC<CountryStatsProps> = ({
  countryName,
  countryCode,
  userCount,
  percent,
  progressColor = '#ff5722',
}) => {
  return (
    <div className="flex items-center space-x-4 py-2">
      {/* Flag */}
      <div className="w-8 h-8 rounded-full overflow-hidden border">
        <Image
          src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
          alt={countryName}
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text and Progress */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{countryName}</span>
          <span className="text-sm text-gray-400">{userCount}</span>
          <span className="text-sm font-bold">{percent}%</span>
        </div>
        <div className="mt-1 w-full h-2 bg-blue-100 rounded-full relative overflow-hidden">
          <div
            className="h-full rounded-full absolute left-0 top-0"
            style={{
              width: `${percent}%`,
              backgroundColor: progressColor,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
