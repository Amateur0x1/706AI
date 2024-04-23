import axios, { AxiosRequestConfig } from 'axios';
import { ItemData } from './types';



class PostItem {
    private readonly apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async postItem(itemData: ItemData): Promise<void> {
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };

        try {
            const data = await axios.post(this.apiUrl, itemData, config);
            console.log('Item posted successfully.');
            console.log(data)
        } catch (error) {
            console.error('Error posting item:', error);
        }
    }
}

// Example usage:


export default PostItem
