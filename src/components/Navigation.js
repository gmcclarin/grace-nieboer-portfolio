import NavigationLink from "./NavLink";

export default function Navigation () {
    return (
        <div className="flex justify-end items-center mt-4 bg-transparent">
            <NavigationLink label="Home"/>
            <NavigationLink label="About" />
            <NavigationLink label="Portfolio" />
        </div>
    )
}