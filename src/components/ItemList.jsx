import React from 'react'
import SingleItem from './SingleItem'
import {Link} from 'react-router-dom'

const ItemList = ({title, numItems, itemsArray, listPath, itemPath}) => {
    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{`${title}s populares`}</h2>
                <Link className="item-list__link"
                      to={listPath}>
                    Mostrar tudo
                </Link>
            </div>
            <div className="item-list__container">
                {itemsArray.filter((item, index) => index < numItems)
                    .map((curObj, i) => (
                        <SingleItem
                            key={`${title}-${i}`}
                            itemPath={itemPath}
                            {...curObj} />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default ItemList;