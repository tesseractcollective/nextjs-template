export type Event = {
  id: string;
  url: string;
  datetime: string;
  venue: {
    name: string;
    location: string;
    city: string;
    country: string;
  };
  offers: [
    {
      type: string;
      url: string;
      status: string;
    }
  ];
};