import React from 'react';
import "./TestButton.module.css";

/**
 * Used For Testing Database Data from Supabase Connection
 * @returns data || error
 */
export default function TestButton() {
    const handleEmails = async () => {
        let { data, error } = await SUPABASE.from('emails').select('*');
        if (error) {
            console.log("Cannot fetch emails from database");
        }
        if (data) {
            console.log(data)
        }
    }
    return (
        <div className="flex" style={{justifyContent: 'center', padding: '1rem'}}>
            <button 
                style={{padding: '1rem', borderRadius: '1rem'}}
                onClick={handleEmails}
            >Print Emails</button>
        </div>
    )
}
