import NavigationLink from "./NavLink";


export default function Navigation ({fontColor}) {
    return (
        <div className={`flex justify-end items-center pt-4 bg-transparent text-${fontColor}`}
        style={{
            color:fontColor
        }}>
            <NavigationLink label="Home"/>
            <NavigationLink label="About" />
            <NavigationLink label="Portfolio" />
        </div>
    )
}