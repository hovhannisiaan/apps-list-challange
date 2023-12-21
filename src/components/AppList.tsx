import React from 'react';
import AppItem from "./AppItem";
import {AppType} from "../customTypes";

const AppList = ({data}: { data: AppType[] }) => {
    return (
        <ul>
            {data.map((item: any) => {
                return (
                    <AppItem key={item.id} title={item.name} description={item.description}
                             categories={item.categories} subscriptions={item.subscriptions}/>

                )
            })}
        </ul>
    );
};


export default AppList;