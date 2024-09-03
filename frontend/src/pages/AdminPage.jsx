import React, { useState } from 'react';
import axios from 'axios';

function AdminPage() {
    const [code, setCode] = useState('');

    const handleVerify = () => {
        axios.post('http://localhost:5000/mess/tokens/verify', { code })
            .then(response => alert('Token verified'))
            .catch(error => alert(error.response.data.message));
    };

    return (
        <div>
            <h1>Admin Token Verification</h1>
            <input 
                type="text" 
                placeholder="Enter Token Code" 
                value={code} 
                onChange={e => setCode(e.target.value)} 
            />
            <button onClick={handleVerify}>Verify</button>
        </div>
    );
}

export default AdminPage;
