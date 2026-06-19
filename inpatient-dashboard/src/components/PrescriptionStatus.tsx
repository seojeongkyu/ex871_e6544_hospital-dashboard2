import React from 'react';
import { usePatients } from '../hooks/usePatients';
import { Patient } from '../types';

const PrescriptionStatus: React.FC = () => {
    const { patients } = usePatients();
    
    const prescribedPatients = patients.filter((patient: Patient) => 
        patient.prescriptionCode === 'EX871' || patient.prescriptionCode === 'E6544'
    );

    const nonPrescribedPatients = patients.filter((patient: Patient) => 
        patient.prescriptionCode !== 'EX871' && patient.prescriptionCode !== 'E6544'
    );

    return (
        <div>
            <h2>Prescription Status</h2>
            <div>
                <h3>Prescribed Patients: {prescribedPatients.length}</h3>
                <h3 style={{ color: 'red' }}>Non-Prescribed Patients: {nonPrescribedPatients.length}</h3>
            </div>
            <div>
                {nonPrescribedPatients.length > 0 && (
                    <h4>Please provide reasons for non-prescription:</h4>
                )}
                {nonPrescribedPatients.map((patient: Patient) => (
                    <div key={patient.id}>
                        <p>{patient.name}</p>
                        <input type="text" placeholder="Reason for non-prescription" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrescriptionStatus;