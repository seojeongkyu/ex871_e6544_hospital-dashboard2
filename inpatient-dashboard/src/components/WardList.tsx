import React from 'react';
import { usePatients } from '../hooks/usePatients';
import { Ward } from '../types';

const WardList: React.FC = () => {
    const { patients } = usePatients();
    
    const filteredPatients = patients.filter(patient => 
        patient.age >= 70 && 
        patient.admissionDays <= 7 && 
        (patient.insuranceType === '건강보험' || patient.insuranceType === '자보') &&
        (patient.diagnosisCode === 'EX871' || patient.diagnosisCode === 'E6544')
    );

    const wardCounts: Record<string, number> = {};

    filteredPatients.forEach(patient => {
        const wardName = patient.ward;
        if (wardCounts[wardName]) {
            wardCounts[wardName]++;
        } else {
            wardCounts[wardName] = 1;
        }
    });

    return (
        <div>
            <h2>병동별 환자 수</h2>
            <ul>
                {Object.entries(wardCounts).map(([ward, count]) => (
                    <li key={ward}>
                        {ward}: {count}명
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WardList;