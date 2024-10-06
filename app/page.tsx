import React from 'react';
import PatientProfileCard from "@/components/PatientCard";

const patientDetails = {
  id: "18923873-2",
  fullName: "Justin McDonald",
  gender: "MALE" as 'MALE',
  dateOfBirth: "22 / 01 / 2005 - 19 years",
  address: "Palava City, Lodha, Dombivli West",
  contactInfos: [
    { phone: '(123) 456-7890', email: 'test@gmail.com' },
  ],
  nextAppointment: {
    date: "20 Feb, Monday",
    time: "10:45 AM"
  },
  conditions: [
    { name: "Hypertension" },
    { name: "Asthma" }
  ],
  allergies: [
    { name: "Latex" },
    { name: "Peanuts" }
  ]
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-200 flex items-center justify-center">
      <PatientProfileCard patientDetails={patientDetails} />
    </div>
  );
};

export default Home;
