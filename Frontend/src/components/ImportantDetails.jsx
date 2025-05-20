import React from 'react';
import { CalendarDays, CheckCircle, School, ClipboardList, KeyRound, GraduationCap, ArrowUpRight } from 'lucide-react';

const details = [
  { icon: <ClipboardList className="w-5 h-5" />, label: 'College Forms' },
  { icon: <CheckCircle className="w-5 h-5" />, label: 'Check Eligibility' },
  { icon: <School className="w-5 h-5" />, label: 'Scholarships' },
  { icon: <KeyRound className="w-5 h-5" />, label: 'Answer Keys' },
  { icon: <GraduationCap className="w-5 h-5" />, label: 'Colleges For You' },
  { icon: <CalendarDays className="w-5 h-5" />, label: 'Examination Dates' },
];

const ImportantDetails = () => {
  return (
    <div className="py-10 md:pb-10 md:pt-5 px-6 md:px-27 bg-[#77B6FF]">
      <h2 className="text-2xl font-semibold border-b-4 inline-block border-black px-5">IMPORTANT DETAILS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#FFCB5A] px-4 py-5 rounded-2xl font-semibold text-black shadow-sm cursor-pointer hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 ml-3">
              {item.icon}
              <span className='font-bold text-xl tracking-wide'>{item.label.toUpperCase()}</span>
            </div>
            <ArrowUpRight className="w-8 h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDetails;
