# Inpatient Dashboard

This project is an inpatient dashboard application designed to filter and display patient data based on specific criteria. It provides insights into patient counts, prescription statuses, equipment utilization, and reasons for non-prescription.

## Features

- **Patient Filtering**: Filter patients based on age (70 years and older), admission days (7 days or less), insurance type (health insurance or auto insurance), and specific diagnosis codes (EX871 and E6544).
- **Ward Overview**: Display the number of patients per ward based on the applied filters.
- **Prescription Status**: Distinguish between patients who have received prescriptions for EX871/E6544 and those who have not, with a focus on non-prescribed patients.
- **Equipment Utilization**: Calculate and display the utilization rate of equipment per ward.
- **Reason Input**: Provide an input field for entering reasons for patients who have not received prescriptions.

## Project Structure

```
inpatient-dashboard
├── src
│   ├── main.tsx                # Entry point of the application
│   ├── App.tsx                 # Main application component
│   ├── components               # UI components for the dashboard
│   │   ├── Dashboard.tsx        # Aggregates various components
│   │   ├── Filters              # Contains filtering components
│   │   │   └── PatientFilters.tsx
│   │   ├── WardList.tsx         # Displays patient counts per ward
│   │   ├── PrescriptionStatus.tsx # Shows prescription status
│   │   ├── EquipmentUtilization.tsx # Displays equipment utilization
│   │   ├── ReasonInput.tsx      # Input for reasons for non-prescription
│   │   └── PatientTable.tsx     # Displays filtered patient data
│   ├── hooks                    # Custom hooks
│   │   └── usePatients.ts       # Manages patient data fetching
│   ├── services                 # API service functions
│   │   └── api.ts               # Functions for API calls
│   ├── utils                    # Utility functions
│   │   └── filters.ts           # Functions for filtering data
│   └── types                    # TypeScript types and interfaces
│       └── index.ts             # Exports types used in the application
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
├── vite.config.ts               # Vite configuration file
└── README.md                    # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd inpatient-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the dashboard.

## Usage Guidelines

- Use the filters to narrow down the patient list based on the specified criteria.
- Review the ward overview to understand patient distribution.
- Check the prescription status to identify patients who have not received necessary prescriptions.
- Utilize the equipment utilization section to monitor equipment availability and usage.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.