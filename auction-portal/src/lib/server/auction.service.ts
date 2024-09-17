import type { AuctionItem } from '$lib/model/AuctionItem';
import dbData from '$lib/server/db-data.json';

export function getAllAuctions() {
	return dbData.auctions;
}

export function addAuction(auction: AuctionItem) {
	dbData.auctions.push(auction);
	return auction;
}
