export default function Project({p}) {
    return (
        <div>
            <div>{p.name}</div>
            <div>{p.descript}</div>
            <div>{p.github}</div>
            <div>{p.demo}</div>
        </div>
    )
}