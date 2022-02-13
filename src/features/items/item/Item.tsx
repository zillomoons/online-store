export const Item = ({imgUrl, altName, title, description, price}: PropsType) => {
    return (
        <div>
            <div>
                <img src={imgUrl} alt={altName}/>
            </div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
            <button>add to cart</button>
        </div>
    )
}

type PropsType = {
    imgUrl: string,
    altName: string
    title: string
    description: string
    price: number
}
