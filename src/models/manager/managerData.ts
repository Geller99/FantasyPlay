import { TeamData } from '../teamData';



export interface ManagerProps {
    name: string,
    age: number,
    country: string,
    team : TeamData,
    sport: string
}


export class Manager {

    sportManager: any;

    constructor(public data: ManagerProps) {
        this.sportManager = (data:ManagerProps) => {
            if (data.sport === 'Basketball') {
                this.sportManager = new BasketballManager(data);
            }
            else if (data.sport === 'Soccer') {
                this.sportManager = new SoccerManager(data);
            }
            else if (data.sport === 'Football') {
                this.sportManager = new FootballManager(data);
            }
        }
    };


    public startGame () {};

    private substitutePlayer () {};

    private callTimeOut () {};

    public changeFormation () {};

    public mintSuperPlayer () {};


}

class BasketballManager extends Manager  {
    constructor (data:ManagerProps) {
        super(data)
    }
}



class SoccerManager extends Manager {
    constructor (data:ManagerProps) {
        super(data)
    }
}


class FootballManager extends Manager {
    constructor (data:ManagerProps) {
        super(data)
    }
}

