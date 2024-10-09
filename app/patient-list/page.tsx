"use client";
import React, { useState } from 'react';

interface Patient {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

interface PatientRegistrationProps {}

const PatientData: Patient[] = [
  { name: "Arvin Kumar", age: 13, gender: "male" },
  { name: "Pratik Yadav", age: 26, gender: "male" },
  { name: "Gargi Deshpande", age: 19, gender: "female" },
  { name: "Sita Sharma", age: 30, gender: "female" },
  { name: "Rahul Singh", age: 22, gender: "male" },
  { name: "Anita Mehta", age: 25, gender: "female" },
  { name: "Vikram Patel", age: 35, gender: "male" },
  { name: "Nisha Gupta", age: 28, gender: "female" },
  { name: "Amit Verma", age: 40, gender: "male" },
  { name: "Priya Rani", age: 32, gender: "female" },
  { name: "Karan Bhatia", age: 21, gender: "male" },
  { name: "Deepa Joshi", age: 27, gender: "female" },
  { name: "Rajesh Kumar", age: 45, gender: "male" },
  { name: "Sneha Iyer", age: 29, gender: "female" },
  { name: "Ravi Kapoor", age: 38, gender: "male" },
  { name: "Meera Nair", age: 24, gender: "female" },
];

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => (
  <div className="flex flex-row justify-between items-center bg-gray-200 py-2 px-4 space-x-2 border border-gray-300 rounded shadow-md">
    <img src="" className="bg-gray-300 h-14 w-16 border border-gray-400 rounded" />
    <div className="flex flex-row justify-between items-center w-full">
      <div>
        <p className="text-lg font-semibold text-gray-800">{patient.name}</p>
        <p className={`inline-flex px-2 rounded text-lg ${patient.gender === 'female' ? 'bg-pink-300' : 'bg-blue-300'}`}>
          {patient.gender}
        </p>
      </div>
      <p className="text-lg text-gray-700">{patient.age}y</p>
    </div>
  </div>
);

const PatientRegistration: React.FC<PatientRegistrationProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 8;

  const totalPages = Math.ceil(PatientData.length / patientsPerPage);

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;

  const currentPatients = PatientData.slice(indexOfFirstPatient, indexOfLastPatient);

  return (
    <section className="max-w-full p-6 min-h-screen bg-gray-50">
      <div className="flex flex-row justify-between items-center border-b-2 border-gray-400 pb-4 space-x-4">
        <h3 className="text-lg bg-gray-100 w-full border border-gray-300 p-2">Patient List: [{PatientData.length}]</h3>
        <div className="flex flex-row text-lg space-x-1">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white p-2 w-16 border border-blue-700 hover:bg-blue-600 transition duration-200"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white p-2 w-16 border border-blue-700 hover:bg-blue-600 transition duration-200"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {currentPatients.map((patient, index) => (
          <PatientCard key={index} patient={patient} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <span>Page {currentPage} of {totalPages}</span>
      </div>
    </section>
  );
}

export default PatientRegistration;