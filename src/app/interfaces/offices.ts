import { StateShort } from "./states";

export interface Office {
    name: string;
    divisionId: string;
    levels: string[];
    roles: string[];
    officialIndices: number[];
}
export interface Official {
    name: string;
    address: Address[];
    party: string;
    phones?: string[];
    urls?: string[];
    photoUrl: string;
    channels?: Channel[];
    emails?: string[];
}

interface Address {
    line1: string;
    line2?: string;
    line3?: string;
    city: string;
    state: StateShort;
    zip: string;
}

interface Channel {
    type: string;
    id: string;
}

const defaultAddress: Address = {
    line1: "1600 Pennslyvania Ave",
    city: "Washington DC",
    state: "DC",
    zip: "01234",
}
export const defaultOffical: Official = {
  name: "John Smith",
  address: [defaultAddress],
  party: "Liberatarian",
  photoUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
}