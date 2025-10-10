import React from 'react'

export default function Title({ name }) {
    return (
        <div className="mb-6">
            <span className="border border-secondary px-4 py-1 rounded-full text-[10px] md:text-[12px] text-accent font-semibold">
                {name}
            </span>
        </div>
    )
}
