import React from 'react'

export default function Alert({ alert }) {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`} role="alert">
                <span className="fas fa-info-circle mr-1"></span> {alert.msg}
            </div>)
    )
}
