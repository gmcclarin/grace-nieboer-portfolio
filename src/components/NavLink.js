export default function NavigationLink(props) {
    const { label } = props
    return (
        <div className="px-5 md:text-lg lg:text-xl text-white">{label}</div>
    )
}