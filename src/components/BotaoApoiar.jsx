import { useState } from 'react'

function BotaoApoiar() {
    const [curtido, setCurtido] = useState(false)

    return (
        <button
            type="button"
            onClick={() => setCurtido(!curtido)}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-full font-semibold transition-colors cursor-pointer ${curtido
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border-2 border-black text-black hover:bg-black/5'
                }`}
        >
            {curtido ? '★ Apoiando o Glorioso!' : '☆ Apoiar Botafogo'}
        </button>
    )
}

export default BotaoApoiar