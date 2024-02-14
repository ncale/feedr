'use client';

import { FeedDocument } from "@/models/feed";
import { createContext, useContext } from "react";

export const FeedContext = createContext<FeedDocument | undefined>(undefined);

export function useFeedContext() {
    const channel = useContext(FeedContext);
    if (channel === undefined) {
        throw new Error("useFeedContext must be used within FeedContext elements")
    };
    return channel;
}