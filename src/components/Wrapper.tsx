import React, { useState } from 'react';
import { Button } from 'primereact/button';

export default function Wrapper({ children, number }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="my-3">
            <Button severity="success" label={`Exercise ${number}`} onClick={() => setVisible(prev => !prev)} />
            {visible && children}
        </div>
    )
}