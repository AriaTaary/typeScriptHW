export interface IUser {
  username?: string,
  avatarUrl?: string
}

export interface IFavoritesAmount {
  count?: number
}

export interface ISearchFormData {
  city: string
  dateOfArrival: Date,
  dateOfDeparture: Date,
  maxPrice?: number
}

export interface ISearchResult {
  id: string
  title: string
  details: string
  photos: string[]
  coordinates: number[],
  bookedDates: Date[],
  totalPrice: number
}

export interface IToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface INotificationMessage {
  type: string
  text: string
}

export interface INotificationAction { 
  name?: string 
  handler?: Function
}
