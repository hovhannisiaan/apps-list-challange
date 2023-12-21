import React from 'react';
import AppItem from "./AppItem";
import {AppType} from "../customTypes";

const AppList = ({data}: { data: AppType[] }) => {
    return (
        <ul>
            {data.map((item: AppType) => {
                return (
                    <AppItem key={item.id} app={item}/>
                )
            })}
        </ul>
    );
};


export default AppList;