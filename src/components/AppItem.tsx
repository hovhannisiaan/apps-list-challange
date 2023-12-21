import React from 'react';
import {AppType} from "../customTypes";


const AppItem = ({app} : {app: AppType}) => {
    return (
        <li>
            <div className="app-item">
                <div className="box-info">
                    <div className="box-info--content">
                        <div className="description">
                            <h1>{app.name}</h1>
                            <p>{app.description}</p>
                        </div>
                        <div className="tags">
                            {app.categories.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <span>{item}</span>{index > 1 || index !== app.categories.length - 1 ? ' / ' : ''}
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="box-info--footer">
                        <ul>
                            {app.subscriptions.map((item, index) => {
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