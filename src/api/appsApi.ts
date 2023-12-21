import axios from "axios";

export type AppType = {
    id: string,
    name: string,
    description: string,
    categories: string[],
    subscriptions: [{ name: string, price: number }]
}
export const fetchApps = async (): Promise<AppType[]> => {
    try {
        const response = await axios.get('data.json');
        const data: AppType[] = response.data
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }
}

export const fetchAppsByCategory = async (tag: string): Promise<AppType[]> => {
    try {
        const data = await fetchApps();

        if (tag === 'All') {
            return data
        } else {
            return data.filter(item => item.categories.includes(tag));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }
}

export const fetchAppByName = async (name: string, tag: string): Promise<AppType[]> => {
    try {
        let data;

        if (tag !== 'All') {
            data = await fetchAppsByCategory(tag);
        } else {
            data = await fetchApps();
        }

        const filteredItems = data.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
        );

        return filteredItems;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }
}