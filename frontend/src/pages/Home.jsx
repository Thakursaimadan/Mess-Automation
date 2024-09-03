import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [items, setItems] = useState([]);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/mess/items')
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    const handlePurchase = (itemId) => {
        
        axios.post('http://localhost:5000/mess/tokens/generate', { studentId })
            .then(response => alert(`Token generated: ${response.data.code}`))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Available Special Items</h1>
            <input 
                type="text" 
                placeholder="Enter Student ID" 
                value={studentId} 
                onChange={e => setStudentId(e.target.value)} 
            />
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name} - ${item.price}
                        <button onClick={() => handlePurchase(item._id)}>Buy</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
