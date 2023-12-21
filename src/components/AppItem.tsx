import React from 'react';

type AppItemType = {
    title: string,
    description: string,
    categories: [],
    subscriptions: [{ name: string, price: number }]
}

const AppItem = ({title, description, categories, subscriptions}: AppItemType) => {
    return (
        <li>
            <div className="app-item">
                <div className="box-info">
                    <div className="box-info--content">
                        <div className="description">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        <div className="tags">
                            {categories.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <span>{item}</span>{index > 1 || index !== categories.length - 1 ? ' / ' : ''}
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="box-info--footer">
                        <ul>
                            {subscriptions.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li><span>{item.name}</span> <h3>{item.price === 0 ? 'Free' : item.price}<sup></sup></h3></li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default AppItem;