export default function Tooltip({ title }:{ title: String }) {
    return (
        <div role="tooltip" className="group-hover:visible absolute invisible z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">
            {title}
        </div>
    )
}