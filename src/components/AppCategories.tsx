import React, {useEffect, useState} from 'react';

const categories: string[] = [
    'Dialer',
    'Voice Analytics',
    'Channels',
    'Reporting',
    'Optimization',
    'All'
]

const AppCategories = ({category} : {category: (data: string) => void}) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const alphabeticTags = [...categories].sort()

    useEffect(() => {
        category(selectedCategory);
    }, [selectedCategory]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <ul className="nav-menu">
                {alphabeticTags.map((item) => {
                    return (
                        <li key={item}>
                            <button
                                onClick={() => setSelectedCategory(item)}
                                className={selectedCategory === item ? 'active' : ''}
                            >
                                {item}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default AppCategories;