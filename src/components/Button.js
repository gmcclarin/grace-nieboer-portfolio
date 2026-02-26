export default function Button({label, color, borderColor}) {
    return (
        <button className="inline-flex items-center border-orange-700 border-2 rounded-full py-1 px-2"
        style={{
            color: {color},
            borderColor: {color}
        }}>
            {label}
        </button>
    )
}