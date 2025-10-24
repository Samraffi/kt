export const GIT_FLOW_DATA = {
  mainTitle: "Git Flow",
  definition: "На данный момент идем по варианту git workflow.",
  branches: [
    {
      name: "Главная ветка",
      type: "develop",
      description: "в ней находится основной поток разработки.",
    },
    {
      name: "Ветки фич",
      type: "отходят от develop",
      description: "и сливаются в develop.",
    },
    {
      name: "Ветки релизов",
      type: "отходят от develop",
      description:
        "фиксятся и сливаются в main. Если за это время в develop появились новые коммиты, то и в develop.",
    },
    {
      name: "Ветки хотфиксов",
      type: "отходят от main",
      description: "и сливаются в main.",
    },
  ],
};
