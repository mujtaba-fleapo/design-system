export declare const dummyMessages: ({
    timestamp: string;
    messages: ({
        id: string;
        senderId: string;
        receiverId: string;
        messageCost: number;
        text: string;
        media?: undefined;
    } | {
        id: string;
        senderId: string;
        receiverId: string;
        messageCost: number;
        text: string;
        media: {
            paidMedia: boolean;
            price: number;
            expiringDate: string;
            purchased: boolean;
            assets: {
                id: string;
                assetType: string;
                assetUrl: string;
            }[];
        };
    })[];
} | {
    timestamp: string;
    messages: ({
        id: string;
        senderId: string;
        receiverId: string;
        messageCost: number;
        text: string;
        media?: undefined;
    } | {
        id: string;
        senderId: string;
        receiverId: string;
        messageCost: number;
        text: string;
        media: {
            paidMedia: boolean;
            useTeaser: boolean;
            price: number;
            expiringDate: string;
            purchased: boolean;
            assets: {
                id: string;
                assetType: string;
                assetUrl: string;
            }[];
        };
    })[];
})[];
//# sourceMappingURL=MessageData.d.ts.map