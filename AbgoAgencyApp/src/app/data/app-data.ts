import { InMemoryDbService,  } from "angular-in-memory-web-api";
import { HomeContent } from "../interfaces/home-content";
import { HomeData } from "./home-data";

export class AppData implements InMemoryDbService {
    dataSources = [];
    constructor(){
        this.dataSources = [];
    }
    createDb(): { homeData: HomeContent[] } {
        const homeData = HomeData.homeData;
        return {homeData}
    }
}

