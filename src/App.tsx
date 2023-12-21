import React, {useState} from 'react';
import './App.css';
import {AppType, fetchAppByName, fetchAppsByCategory} from "./api/appsApi";
import AppCategories from "./components/AppCategories";
import AppList from "./components/AppList";

function App() {
    const [data, setData] = useState<AppType[]>([]);

    const pageSize:number = 3;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [category, setCategory] = useState<string>('All');

    const [searchTerm, setSearchTerm] = useState<string>('');


    // Categories
    const handleFilteredItems = async (tag: string) => {
        setCurrentPage(1);

        if (searchTerm === '') {
            setData(handleSortedApps(await fetchAppsByCategory(tag)));
        } else {
            setData(handleSortedApps(await fetchAppByName(searchTerm, tag)))
        }
    }

    const handleCategories = (category: string) => {
        setCategory(category)
        handleFilteredItems(category)
    }

    // Pagination

    const startIndex:number = (currentPage - 1) * pageSize;
    const endIndex:number = startIndex + pageSize;

    const currentItems:AppType[] = data.slice(startIndex, endIndex);

    const totalPages:number = Math.ceil(data.length / pageSize);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    // Search

    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(1)
        const searchTerm:string = event.target.value;
        setSearchTerm(searchTerm);

        const filteredItems:AppType[] = await fetchAppByName(searchTerm, category);
        setData(handleSortedApps(filteredItems));
    };

    // Sort by price

    const calculateSubscriptionSum = (apps: AppType): number => {
        return apps.subscriptions.reduce((sum, subscription) => sum + subscription.price, 0);
    };

    const handleSortedApps = (data: AppType[]) => {
        const sortedApps:AppType[] = data.sort((a, b) => {
            const sumA = calculateSubscriptionSum(a);
            const sumB = calculateSubscriptionSum(b);

            return sumA - sumB;
        });

        return sortedApps
    }


    return (
        <div>
            <div className="flex-container">
                <nav className="nav-categories">
                    <h2>Categories</h2>

                    <AppCategories category={handleCategories}/>

                </nav>
                <section className="apps-list">
                    <header>
                        <input
                            type="text"
                            placeholder="Search by App"
                            value={searchTerm}
                            onChange={handleSearchChange}/>
                    </header>
                    <AppList data={currentItems}/>
                    <ul className="pagination">
                        <li
                            className={currentPage === 1 ? 'disable' : ''}
                        >
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                &lt;
                            </button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index}>
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    disabled={currentPage === index + 1}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li
                            className={currentPage === totalPages ? 'disable' : ''}
                        >
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                &gt;
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default App;
