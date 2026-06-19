import React, { useState } from 'react';

const ReasonInput: React.FC<{ onReasonSubmit: (reason: string) => void }> = ({ onReasonSubmit }) => {
    const [reason, setReason] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (reason.trim()) {
            onReasonSubmit(reason);
            setReason('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="reason">사유 입력:</label>
            <input
                type="text"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
            />
            <button type="submit">제출</button>
        </form>
    );
};

export default ReasonInput;