import React from 'react';
import { usePatients } from '../hooks/usePatients';
import { Ward } from '../types';

const EquipmentUtilization: React.FC = () => {
    const { patients } = usePatients();
    
    const wardUtilization = patients.reduce((acc: Record<string, { total: number; utilized: number }>, patient) => {
        const wardName = patient.ward; // Assuming patient has a ward property
        if (!acc[wardName]) {
            acc[wardName] = { total: 0, utilized: 0 };
        }
        acc[wardName].total += 1; // Count total patients in the ward
        if (patient.equipmentUtilized) { // Assuming patient has a property indicating equipment utilization
            acc[wardName].utilized += 1; // Count utilized equipment
        }
        return acc;
    }, {});

    return (
        <div>
            <h2>Equipment Utilization</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ward</th>
                        <th>Total Patients</th>
                        <th>Utilized Equipment</th>
                        <th>Utilization Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(wardUtilization).map(([wardName, { total, utilized }]) => (
                        <tr key={wardName}>
                            <td>{wardName}</td>
                            <td>{total}</td>
                            <td>{utilized}</td>
                            <td>{total > 0 ? ((utilized / total) * 100).toFixed(2) + '%' : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EquipmentUtilization;