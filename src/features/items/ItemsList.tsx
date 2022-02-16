import {Item} from "./item/Item";
import {itemsData} from "./ItemsData";

const itemsListStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '50px',
}

export const ItemsList = () => {
    const mappedItems = itemsData.map(item => <Item key={item.id}
                                                    id={item.id}
                                                    imgUrl={item.imgUrl}
                                                    altName={item.altName}
                                                    title={item.title}
                                                    description={item.description}
                                                    price={item.price} />)
    return (
        <div style={itemsListStyle}>
            {mappedItems}
        </div>
    )
}
