import React from 'react'

export default function InputField({ labelName, type, name, value, placeholder }) {
    return (
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                {labelName}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none"
                placeholder={placeholder}
            />
        </div>
    )
}
