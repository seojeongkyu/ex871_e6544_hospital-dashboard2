import React from 'react';

const PatientFilters: React.FC = () => {
    const [age, setAge] = React.useState<number | undefined>(undefined);
    const [admissionDays, setAdmissionDays] = React.useState<number | undefined>(undefined);
    const [insuranceType, setInsuranceType] = React.useState<string>('건강보험');
    const [diagnosisCode, setDiagnosisCode] = React.useState<string>('EX871');

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(event.target.value));
    };

    const handleAdmissionDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdmissionDays(Number(event.target.value));
    };

    const handleInsuranceTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInsuranceType(event.target.value);
    };

    const handleDiagnosisCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDiagnosisCode(event.target.value);
    };

    return (
        <div>
            <h2>환자 필터</h2>
            <div>
                <label>나이 (70세 이상): </label>
                <input type="number" value={age} onChange={handleAgeChange} min={70} />
            </div>
            <div>
                <label>재원일수 (7일 이내): </label>
                <input type="number" value={admissionDays} onChange={handleAdmissionDaysChange} max={7} />
            </div>
            <div>
                <label>보험 종류: </label>
                <select value={insuranceType} onChange={handleInsuranceTypeChange}>
                    <option value="건강보험">건강보험</option>
                    <option value="자보">자보</option>
                </select>
            </div>
            <div>
                <label>상병코드: </label>
                <select value={diagnosisCode} onChange={handleDiagnosisCodeChange}>
                    <option value="EX871">EX871</option>
                    <option value="E6544">E6544</option>
                </select>
            </div>
        </div>
    );
};

export default PatientFilters;