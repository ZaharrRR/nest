import { ItemCardDto } from 'src/types/item-card.dto';

export class MockItemCardsData {
  public static readonly tempItemCards: ItemCardDto[] = [
    {
      title: 'Супер-пушка #1',
      description: 'Это уникальная супер пушка 1',
      imagePath: '/img/image1.jpg',
      price: 10,
    },
    {
      title: 'Супер-пушка #2',
      description: 'Это уникальная супер пушка 2',
      imagePath: '/img/image1.jpg',
      price: 20,
    },
    {
      title: 'Супер-пушка #3',
      description: 'Это уникальная супер пушка 3',
      imagePath: '/img/image1.jpg',
      price: 30,
    },
  ];
}
