export class Player {
  id: number;
  name: string;
  score: number | string;
  isActive: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.score = '';
    this.isActive = false;
  }
}
