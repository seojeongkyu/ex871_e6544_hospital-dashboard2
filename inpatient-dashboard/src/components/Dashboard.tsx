import React from 'react';
import WardList from './WardList';
import PrescriptionStatus from './PrescriptionStatus';
import EquipmentUtilization from './EquipmentUtilization';
import ReasonInput from './ReasonInput';
import PatientFilters from './Filters/PatientFilters';
import PatientTable from './PatientTable';
import { usePatients } from '../hooks/usePatients';

const Dashboard: React.FC = () => {
    const { patients, loading, error } = usePatients();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading patients: {error.message}</div>;

    return (
        <div>
            <h1>Inpatient Dashboard</h1>
            <PatientFilters />
            <WardList patients={patients} />
            <PrescriptionStatus patients={patients} />
            <EquipmentUtilization patients={patients} />
            <ReasonInput patients={patients} />
            <PatientTable patients={patients} />
        </div>
    );
};

export default Dashboard;