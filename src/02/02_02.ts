export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HousesType = {
    buildetAt: number
    repaired: boolean
    address: AddressType
}

export type BuildingType = {
    build: string
    budget: number
    stuff: string
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuilding: Array<BuildingType>
    cityzenNumber: number
}