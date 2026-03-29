type BaseExperience = {
  initDate: string;
  title: string;
  company: string;
};

type WithDescriptions =
  | {
      shortDescription: string;
      fullDescription?: string;
    }
  | {
      fullDescription: string;
      shortDescription?: string;
    };

type CurrentExperience = BaseExperience &
  WithDescriptions & {
    current: true;
    finishDate?: never;
  };

type PastExperience = BaseExperience &
  WithDescriptions & {
    current: false;
    finishDate: string;
  };

export type Experience = CurrentExperience | PastExperience;
