import type { AuctionItem } from '$lib/model/AuctionItem';
import dbData from '$lib/server/db-data.json';

const inMemoryAuctions: AuctionItem[] = dbData.auctions;

export function getAllAuctions(): AuctionItem[] {
	return inMemoryAuctions;
}

export function addAuction(auction: AuctionItem) {
	inMemoryAuctions.push(auction);
	return auction;
}
