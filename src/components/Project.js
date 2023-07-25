export default function Project({p}) {
    return (
        <div className="">
            <div>{p.name}</div>
            <div>{p.descript}</div>
            <a href={p.github}>github</a>
            <a href={p.demo}>demo</a>
        </div>
    )
}