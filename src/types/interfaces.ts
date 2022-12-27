export interface ISkills {
  imageSrc: string;
  name: string;
  category: string;
  level: number;
  id: number;
}

export interface ITopic {
  id: number;
  name: string;
  skills: ISkills[];
}

export interface IChallenge {
  title: string;
  id: number;
  subTitle: string;
  description: string;
  url: string;
  sourceCodeUrl: string;
  year: number;
  imageSrc: string;
  logoSrc: string;
  skills: ISkills[];
}

export interface IChallengesPerYear {
  id: number;
  year: number;
  challenges: IChallenge[];
}

export interface IForm {
  user_name: string;
  user_email: string;
  message: string;
}

export interface IIsValid {
  name: boolean;
  subject: boolean;
  email: boolean;
  message: boolean;
}

export interface IRoute {
  id: number;
  route: string;
}

export interface INextImage {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
