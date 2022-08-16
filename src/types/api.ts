 export interface Open {
        day: string;
        time_from: string;
        time_to: string;
    }

    export interface IShop {
          id: string;
        title: string;
        body: string;
        logo: string;
        category: string[];
        tags: string[];
        email: string[];
        phone: string[];
        location: number;
        image: string;
        url: string;
        floor: number;
        open: Open[];
        color: string;
}

export interface IShopApi {
    shops: IShop[];
}