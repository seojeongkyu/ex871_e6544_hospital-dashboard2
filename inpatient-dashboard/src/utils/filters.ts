export const filterPatients = (patients, filters) => {
    const { diagnosisCodes, minAge, maxDays, insuranceTypes } = filters;

    return patients.filter(patient => {
        const isDiagnosisMatch = diagnosisCodes.includes(patient.diagnosisCode);
        const isAgeMatch = patient.age >= minAge;
        const isDaysMatch = patient.admissionDays <= maxDays;
        const isInsuranceMatch = insuranceTypes.includes(patient.insuranceType);

        return isDiagnosisMatch && isAgeMatch && isDaysMatch && isInsuranceMatch;
    });
};

export const getPrescriptionStatus = (patients) => {
    const prescribed = patients.filter(patient => patient.prescriptionCode === 'EX871' || patient.prescriptionCode === 'E6544');
    const notPrescribed = patients.filter(patient => !prescribed.includes(patient));

    return {
        prescribed,
        notPrescribed
    };
};

export const calculateUtilizationRate = (equipment, totalEquipment) => {
    return (equipment / totalEquipment) * 100;
};