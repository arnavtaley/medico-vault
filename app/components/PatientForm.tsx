"use client";
import React, { useState } from 'react';

interface PatientData {
  name: string;
  dob: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  appointmentDate: string;
  appointmentTime: string;
  conditions: string[];
  allergies: string[];
}

const PatientForm: React.FC = () => {
  const [patientData, setPatientData] = useState<PatientData>({
    name: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
    conditions: [],
    allergies: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, key: 'conditions' | 'allergies') => {
    const { value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [key]: value.split(',').map((item) => item.trim()),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(patientData);
  };

  return (
    <div className="w-full patient-form p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={patientData.dob}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={patientData.gender}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <textarea
            name="address"
            value={patientData.address}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={patientData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={patientData.email}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700">Next Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={patientData.appointmentDate}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700">Next Appointment Time</label>
          <input
            type="time"
            name="appointmentTime"
            value={patientData.appointmentTime}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Conditions</label>
          <input
            type="text"
            name="conditions"
            value={patientData.conditions.join(', ')}
            onChange={(e) => handleArrayChange(e, 'conditions')}
            placeholder="Enter conditions separated by commas"
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Allergies</label>
          <input
            type="text"
            name="allergies"
            value={patientData.allergies.join(', ')}
            onChange={(e) => handleArrayChange(e, 'allergies')}
            placeholder="Enter allergies separated by commas"
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
