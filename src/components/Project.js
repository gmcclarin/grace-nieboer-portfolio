export default function Project({p}) {
    console.log(p.photos)
    return (
            <div className="text-9xl font-fun font-bold sm:text-[60px]">
                {p.name}.
            </div>
    )
}