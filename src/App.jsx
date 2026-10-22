// src/App.jsx
import { useState } from 'react'

function App() {
  const [curtido, setCurtido] = useState(false)

  return (
    <main className="mx-auto max-w-2xl p-6">
      {/* Cartão Principal */}
      <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-6">

        {/* Lado a Lado: Texto à esquerda e Imagem à direita */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-black">
              Botafogo de Futebol e Regatas
            </h1>
            <p className="text-gray-600">
              O Glorioso! Clube de Regatas Botafogo, tradição e paixão alvinegra.
            </p>
          </div>

          {/* Imagem do Escudo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg"
            alt="Escudo do Botafogo"
            className="w-24 h-24 object-contain shrink-0"
          />
        </div>

        {/* Botão Interativo com Estado */}
        <div>
          <button
            type="button"
            onClick={() => setCurtido(!curtido)}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-full font-semibold transition-colors ${curtido
                ? 'bg-black text-white hover:bg-gray-800'
                : 'border-2 border-black text-black hover:bg-black/5'
              }`}
          >
            {curtido ? '★ Apoiando o Glorioso!' : '☆ Apoiar Botafogo'}
          </button>
        </div>

      </article>
    </main>
  )
}

export default App