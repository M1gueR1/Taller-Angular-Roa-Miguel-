export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;
   
    public constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string, poster: string) {
      this.name = name;
      this.id = id;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.webpage = webpage;
      this.poster = poster;
    }
   }