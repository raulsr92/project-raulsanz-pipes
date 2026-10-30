
export enum Color {
  red, //0
  black, //1
  blue, //2
  green, //3
}

export enum Creator {
  DC, //0
  Marvel, //1
}

export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
  creator: Creator;
}

export const ColorMap = {
  [Color.red]: '#E57373',
  [Color.black]: '#424242',
  [Color.blue]: '#64B5F6',
  [Color.green]: '#81C784',
};
