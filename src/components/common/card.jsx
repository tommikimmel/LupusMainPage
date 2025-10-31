function Card({title, description, icon})
{
    return(
        <div className="h-[300px] w-[230px] bg-lupus-light rounded-lg shadow-lg flex flex-col items-center text-center justify-around p-4 gap-3 border-1 border-lupus-primary hover:scale-105 transition-transform">
            <span className="text-[25px]">{icon}</span>
            <h2 className="font-semibold text-[24px] text-lupus-primary">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    )
}
export default Card;