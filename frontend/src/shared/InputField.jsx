import React from 'react'

export default function InputField({ labelName, type, name, value, placeholder, method }) {
    return (
        <div>
            <label className="block text-sm font-medium text-primary  mb-1">
                {labelName}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                className="w-full bg-[#1A1A1A] border text-secondary border-primary rounded-lg px-4 py-3 focus:border-secondary focus:outline-none"
                placeholder={placeholder}
                onChange={method}
            />
        </div>
    )
}
