export enum TCardIdentity {
  TWO = 2,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
  JOKER
}

export enum TCardRank {
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  JACK = 10,
  QUEEN = 10,
  ACE = 11,
  JOCKER = 10
}

export enum TCardSuits {
  SPADES = 'SPADES',
  HEARTS = 'HEARTS',
  DIAMONDS = 'DIAMONDS',
  CLUBS = 'CLUBS'
}

export enum TTableType {
  ONE_GAME = 'ONE_GAME',
  TWO_GAME = 'TWO_GAME',
  THREE_GAME = 'THREE_GAME',
  FOUR_GAME = 'FOUR_GAME'
}

/**
 * Combination will include several types
 */
export enum TCombinationTypes {
  STANDARD
}

export enum TResponseTypes {
  SUCCESS,
  NOT_FOUND,
  ERROR
}

export enum TGameStateTypes {
  AWAIT_STARTING,
  PLAYERS_CHOOSE_PLACE,
  CARDS_DISTRIBUTION,
  AWAIT_USER_ACTION,
  USER_PERFORM_ACTION,
  PASS_ACTIVE_ROLE_TO_ANOTHER_USER,
  FINISHED
}

export enum TUserGameActionTypes {

}
