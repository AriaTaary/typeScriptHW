export interface IUser {
  username: string,
  avatarUrl: string
}

export interface IFavoritesAmount {
  count: number
}

export interface ISearchFormData {
  dateOfArrival: Date,
  dateOfDeparture: Date,
  maxPrice?: number
}
