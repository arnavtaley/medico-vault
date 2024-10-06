import React from 'react';
import Image from "next/image";

import { BsArrowRightSquare } from "react-icons/bs";

interface ContactInfo {
  phone: string;
  email: string;
}

interface MedicalCondition {
  name: string;
}

interface PatientDetails {
  id: string | number;
  fullName: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  dateOfBirth: string;
  address: string;
  contactInfos: ContactInfo[];
  nextAppointment: {
    date: string;
    time: string;
  };
  conditions: MedicalCondition[];
  allergies: MedicalCondition[];
}

interface PatientProfileProps {
  patientDetails: PatientDetails;
}

const ContactList: React.FC<{ contactInfos: ContactInfo[] }> = ({ contactInfos }) => (
  <ul className="list-disc pl-5">
    {contactInfos.length > 0 ? (
      contactInfos.map((contact, index) => (
        <React.Fragment key={index}>
          <li>
            <strong>Phone:</strong> {contact.phone}
          </li>
          <li>
            <strong>Email:</strong> {contact.email}
          </li>
        </React.Fragment>
      ))
    ) : (
      <li>No contacts available.</li>
    )}
  </ul>
);


const PatientCard: React.FC<PatientProfileProps> = ({ patientDetails }) => {
  const {
    id,
    fullName,
    gender,
    dateOfBirth,
    address,
    contactInfos,
    nextAppointment,
    conditions,
    allergies
  } = patientDetails;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4 space-y-4">
      <div className="flex items-center border-b border-gray-300 pb-4">
        <Image
          src="/public/MarkBriggs.jpg"
          alt="profile-img"
          width={128}
          height={128}
          className="flex justify-center items-center rounded-md border-4 border-gray-200"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">{fullName}</h2>
          <p className="text-gray-600">{id}</p>
          <p className="text-gray-600">{gender}</p>
        </div>
      </div>

      <button className="bg-sky-200 flex flex-row justify-center items-center w-full text-sky-700 py-2 px-2 rounded-lg space-x-4 active:bg-sky-300 transition duration-300 ">
        <p className="flex flex-row justify-center items-center w-full pl-10">Medications</p>
        <BsArrowRightSquare className="w-1/6 border-l border-solid border-sky-700 px-2 " />
      </button>

      <div className="">
        <div className="text-gray-700">
          <h3 className="font-semibold">DOB:</h3>
          <p>{dateOfBirth}</p>
        </div>
        <div className="text-gray-700 mt-2">
          <h3 className="font-semibold">Address:</h3>
          <p>{address}</p>
        </div>
        <div className="text-gray-700 mt-2">
          <h3 className="font-semibold">Contacts:</h3>
          <ContactList contactInfos={contactInfos} />
        </div>
        <div className="text-gray-700 mt-2">
          <h3 className="font-semibold">Next Appointment:</h3>
          <p>{nextAppointment.date} at {nextAppointment.time}</p>
        </div>
        <div className="text-gray-700 mt-2">
          <h3 className="font-semibold">Conditions:</h3>
          <p className="flex space-x-2">
            {conditions.map(condition => (
              <span key={condition.name} className="bg-green-200 text-green-800 px-2 py-1 rounded">{condition.name}</span>
            ))}
          </p>
        </div>
        <div className="text-gray-700 mt-2">
          <h3 className="font-semibold">Allergies:</h3>
          <p className="flex space-x-2">
            {allergies.map(allergy => (
              <span key={allergy.name} className="bg-red-200 text-red-800 px-2 py-1 rounded">{allergy.name}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
