function Cartao({ titulo, children }) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">{titulo}</h2>
            <div className="mt-3 text-gray-700">{children}</div>
        </article>
    )
}

export default Cartao