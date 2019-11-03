import React from 'react'

export default function Alert({ alert }) {
    return (
        alert !== null && (
            <div className="container mt-3">
                <div className="alert alert-danger" role="alert">
                    <span className={alert.icon}></span> {alert.msg}
                </div>
            </div>)
    )
}
