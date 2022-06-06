interface RowReference {
  title: string;
  order: string[];
}

interface Table {
  title: string;
  price: number;
  points: string[];
  link: string;
  rows: Row[];
}

type RowData = string[] | { [key: string]: number | string };

interface Row {
  title: string;
  data: RowData;
}

export interface ServiceTable {
  rowReference: RowReference[];
  table: Table[];
}

export const services: ServiceTable = {
  rowReference: [
    {
      title: "Features",
      order: ["Advanced Translation", "Journal Selection", "Advanced Editing"]
    },
    {
      title: "Experts",
      order: ["Professional Native Editors", "Peer Reviewers"]
    }
  ],
  table: [
    {
      title: "Silver Pack",
      price: 10,
      points: ["point 1", "point 2", "point 3"],
      link: "https://www.google.com",
      rows: [
        {
          title: "Features",
          data: ["Advanced Editing", "Advanced Translation"]
        },
        {
          title: "Experts",
          data: {
            "Professional Native Editors": 2,
            "Peer Reviewers": 2
          }
        }
      ]
    },
    {
      title: "Gold Pack",
      price: 10,
      points: ["point 1", "point 2", "point 3"],
      link: "https://www.google.com",
      rows: [
        {
          title: "Features",
          data: ["Advanced Translation"]
        },
        {
          title: "Experts",
          data: {
            "Professional Native Editors": 3,
            "Peer Reviewers": 4
          }
        }
      ]
    },
    {
      title: "Translation Pack",
      price: 10,
      points: ["point 1", "point 2", "point 3"],
      link: "https://www.google.com",
      rows: [
        {
          title: "Features",
          data: ["Advanced Translation"]
        },
        {
          title: "Experts",
          data: {
            "Professional Native Editors": 5,
            "Peer Reviewers": 6
          }
        }
      ]
    }
  ]
};
