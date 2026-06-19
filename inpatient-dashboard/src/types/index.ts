export interface Patient {
    id: string;
    name: string;
    age: number;
    admissionDate: Date;
    diagnosisCode: string;
    insuranceType: 'healthInsurance' | 'autoInsurance';
    daysInHospital: number;
    hasPrescription: boolean;
    prescriptionCode?: string; // EX871 or E6544
}

export interface Ward {
    id: string;
    name: string;
    patientCount: number;
    equipmentCount: number;
    equipmentUtilizationRate: number; // percentage
}

export interface PrescriptionStatus {
    prescribedPatients: Patient[];
    nonPrescribedPatients: Patient[];
}

export interface FilterCriteria {
    minAge: number;
    maxDaysInHospital: number;
    insuranceTypes: ('healthInsurance' | 'autoInsurance')[];
    diagnosisCodes: string[];
}