import axios from 'axios';
import { Patient } from '../types';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchPatients = async (filters: {
  age: number;
  admissionDays: number;
  insuranceType: string;
  diagnosisCodes: string[];
}): Promise<Patient[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients`, {
      params: {
        age: filters.age,
        admissionDays: filters.admissionDays,
        insuranceType: filters.insuranceType,
        diagnosisCodes: filters.diagnosisCodes.join(','),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const fetchEquipmentUtilization = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/equipment/utilization`);
    return response.data;
  } catch (error) {
    console.error('Error fetching equipment utilization:', error);
    throw error;
  }
};