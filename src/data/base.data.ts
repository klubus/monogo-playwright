export enum supportedLanguages {
  english = "https://www.ploom.co.uk/en",
  polish = "https://www.ploom.pl/pl",
}

export enum languages {
  polish,
  english,
}

export const currentLanguageWebsite = {
  [languages.english]: {
    language: supportedLanguages.english,
  },
  [languages.polish]: {
    language: supportedLanguages.polish,
  },
};
