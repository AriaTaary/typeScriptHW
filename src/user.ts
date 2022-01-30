import { renderBlock } from './lib.js'
import { IUser, IFavoritesAmount } from './types.js'

export function setLocalData(): void {
  const localUser = {
    username: 'Wade Warren',
    avatarUrl: './img/avatar.png'
  }

  localStorage.setItem('user', JSON.stringify(localUser));

  const localFavoritesAmount = {
    count: 3
  }

  localStorage.setItem('favoritesAmount', JSON.stringify(localFavoritesAmount));
}

function checkUserData(obj: any): obj is IUser {
  return !!obj &&
    typeof obj === "object" &&
    "username" in obj && "username" in obj
}

export function getUserData(): IUser {
  let user = JSON.parse(localStorage.getItem('user') || '') as unknown;

  if (checkUserData(user)) {
    let verifiedUser = {} as IUser;

    if (typeof user.username === "string") {
      verifiedUser.username = user.username;
    }
    if (typeof user.avatarUrl === "string") {
      verifiedUser.avatarUrl = user.avatarUrl;
    }

    return verifiedUser;
  }

  return {};
}

function checkFavoritesAmountData(obj: any): obj is IFavoritesAmount {
  return !!obj && typeof obj === "object" && "count" in obj
}

export function getFavoritesAmount(): IFavoritesAmount {
  let favoritesAmount = JSON.parse(localStorage.getItem('favoritesAmount') || '') as unknown;
  
  if (checkFavoritesAmountData(favoritesAmount)) {
    let verifiedFavoritesAmount = {} as IFavoritesAmount;

    if (favoritesAmount.count && typeof favoritesAmount.count === "number") {
      verifiedFavoritesAmount.count = favoritesAmount.count ;
    }

    return verifiedFavoritesAmount;
  }

  return {};
}

export function renderUserBlock(username?: string, avatarUrl?: string, favoriteItemsAmount?: number): void {
  if (username && avatarUrl) {
    const favoritesCaption = favoriteItemsAmount || 'ничего нет';

    renderBlock(
      'user-block',
      `<div class="header-container">
        <img class="avatar" src=${avatarUrl} alt=${username} />
        <div class="info">
            <p class="name">${username}</p>
            <p class="fav">
              <i class="heart-icon${favoriteItemsAmount ? ' active' : ''}"></i>${favoritesCaption}
            </p>
        </div>
      </div>`
    )
  }
}
