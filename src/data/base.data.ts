export enum SupportedLanguages {
  English = "https://www.ploom.co.uk/en",
  Polish = "https://www.ploom.pl/pl",
}

export enum languages {
  polish,
  english,
}

export const currentLanguageWebsite = {
  [languages.english]: {
    language: SupportedLanguages.English,
  },
  [languages.polish]: {
    language: SupportedLanguages.Polish,
  },
};
