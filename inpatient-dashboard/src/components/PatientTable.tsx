import React from 'react';
import { usePatients } from '../hooks/usePatients';
import { Patient } from '../types';

const PatientTable: React.FC = () => {
    const { patients, loading, error } = usePatients();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading patients: {error.message}</div>;

    return (
        <div>
            <h2>Patient List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Diagnosis Code</th>
                        <th>Admission Days</th>
                        <th>Insurance Type</th>
                        <th>Prescription Status</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient: Patient) => (
                        <tr key={patient.id} style={{ fontWeight: patient.prescriptionStatus === 'Not Prescribed' ? 'bold' : 'normal' }}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.diagnosisCode}</td>
                            <td>{patient.admissionDays}</td>
                            <td>{patient.insuranceType}</td>
                            <td>{patient.prescriptionStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientTable;