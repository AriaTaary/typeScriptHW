import { ISearchFormData, ISearchResult } from './types.js'

export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

export class FlatRentSdk {
  get(id: string): Promise<Object | null>
  search(parameters: ISearchFormData): Promise<ISearchResult[] | null>
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date)
  _resetTime(date: Date)
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number
  _generateDateRange(from: Date, to: Date): Date[]

  _generateTransactionId(): number
}
