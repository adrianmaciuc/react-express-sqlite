export interface CardsListProps {
  cards: CardInterface[];
}

export interface CardInterface {
  id?: number;
  developer: string;
  QA: string;
  manager: string;
  task: string;
  teamname: string;
  //   onAddEntry?: (data: CardInterface) => void;
}

export interface AddEntryFormProps {
  onAddEntry: (newEntry: CardInterface) => void;
}
