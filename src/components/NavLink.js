export default function NavigationLink(props) {
    const { label, href } = props
    return (
        <div className="px-5 md:text-lg lg:text-xl"><a href={href}>{label}</a></div>
    )
}