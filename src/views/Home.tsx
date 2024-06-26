import React, { useState } from 'react';

const Home: React.FC = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1>Home</h1>
            <p>Overview here</p>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
}

export default Home;