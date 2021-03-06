import React from 'react'




function Categories({ items, onClickItem }) {

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = index => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeItem === null ? 'active' : null} onClick={() => onSelectItem(null)}>Все</li>
                    {
                        items && items.map((name, index) => <li className={activeItem === index ? 'active' : 'null'}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories
