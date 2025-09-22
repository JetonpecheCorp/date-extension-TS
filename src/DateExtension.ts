declare global {
  interface Date 
  {
    /**
     * Creer une liste de date jusqu'a la date cible à partir de l'instance actuelle
     * 
     * @param _to date de fin au format yyyy-mm-dd ou instance Date
     */
    createCalendarTo(_to: string | Date): Date[],
  
    /**
     * Créer une nouvelle instance clonée à partir de l'instance actuelle
     * 
     * @returns la nouvelle instance
     */
    clone(): Date,

    /**
     * Formatter la date ou l'heure de l'instance actuelle
     * 
     * @param _format format demandé  
     * - D: Numero du jour
     * - DD: Nom de la semaine abrégé et numero du jour
     * - DDD: Nom de la semaine et numero du jour
     * 
     * - M: Numero du mois
     * - MM: Nom du mois abrégé
     * - MMM: Nom du mois
     * 
     * - Y: Année
     * - YY: Année sur deux chiffres
     * 
     * - H: heure sur un ou deux chiffre(s)
     * - HH: Heure sur deux chiffres
     * 
     * - m: minutes sur deux chiffres
     * - S: secondes sur deux chiffres
     * 
     * - Autre: fait toi plaisir
     * 
     * @returns La date ou l'heure au format demandé
     */
    toFormat(_format: string): string,

    /**
     * Donne la date
     * 
     * @returns La date au format YYYY-MM-DD
     */
    toISODateString(): string,

    /**
     * Donne l'heure
     * 
     * @returns L'heure au format HH:mm:ss
     */
    toISOTimeString(): string,

    /**
     * Ajouter un ou des jours à l'instance actuelle 
     * 
     * @param _nbDay nombre(s) de jours à ajouter
     * @returns l'instance actuelle modifiée
     */
    setAddDay(_nbDay: number): Date,

    /**
     * Ajouter un ou des mois à l'instance actuelle 
     * 
     * @param _nbMonth nombre(s) de mois à ajouter
     * @returns l'instance actuelle modifiée
     */
    setAddMonth(_nbMonth: number): Date,

    /**
     * Ajouter une ou des années à l'instance actuelle 
     * 
     * @param _nbYear nombre(s) d'année(s) à ajouter
     * @returns l'instance actuelle modifiée
     */
    setAddYear(_nbYear: number): Date,

    /**
     * Supprimer un ou des jours à l'instance actuelle 
     * 
     * @param _nbDay nombre(s) de jours à supprimer
     * @returns l'instance actuelle modifiée
     */
    setRemoveDay(_nbDay: number): Date,

    /**
     * Supprimer un ou des mois à l'instance actuelle 
     * 
     * @param _nbMonth nombre(s) de mois à supprimer
     * @returns l'instance actuelle modifiée
     */
    setRemoveMonth(_nbMonth: number): Date,

    /**
     * Supprimer une ou des années à l'instance actuelle 
     * 
     * @param _nbYear nombre(s) d'année(s) à supprimer
     * @returns l'instance actuelle modifiée
     */
    setRemoveYear(_nbYear: number): Date,

    /**
     * Mettre la date au debut du mois de l'instance actuelle
     * 
     * @returns l'instance actuelle modifiée
     */
    setStartMonth(): Date,

    /**
     * Mettre la date à la fin du mois de l'instance actuelle
     * 
     * @returns l'instance actuelle modifiée
     */
    setEndMonth(): Date,

    /**
     * Mettre la date au debut de la semaine de l'instance actuelle
     * 
     * @returns l'instance actuelle modifiée
     */
    setStartWeek(): Date,

    /**
     * Mettre la date a la fin de la semaine de l'instance actuelle
     * 
     * @returns l'instance actuelle modifiée
     */
    setEndWeek(): Date,

    /**
     * Mettre la date au debut de l'année de l'instance actuelle
     * 
     * @returns l'instance actuelle modifiée
     */
    setStartYear(): Date,

    /**
     * Mettre la date a la fin de l'année de l'instance actuelle
     * 
     * @returns l'instance actuelle modifiée
     */
    setEndYear(): Date,

    /**
     * Donne le nombre de jours entre la date de l'instance actuelle et la date donnée
     * 
     * @param _date 
     * @returns Nombre de jours
     */
    diffNbDay(_date: Date): number,

    /**
     * Récuperer le nom du jour de la semaine de l'instance actuelle 
     * dans la langue du navigateur
     * 
     * @returns nom du jour de la semaine
     */
    getDayName(): string,

    /**
     * Récuperer le nom du mois de l'instance actuelle 
     * dans la langue du navigateur
     * 
     * @returns nom du mois
     */
    getMonthName(): string,

    /**
     * Recupérer le numéro de la semaine de l'instance actuelle
     * 
     * @returns numéro de la semaine
     */
    getWeekNumber(): number,

    /**
     * Vérifier que la date est dans le weekend (Samedi ou Dimanche)
     */
    isWeekend(): boolean,

    /**
     * Vérifier que la date est dans la semaine (Lundi au vendredi)
     */
    isWeek(): boolean,

    /**
     * Ajouter une ou des heure(s) à l'instance actuelle 
     * 
     * @param _nbHour nombre(s) d'heure(s) à ajouter
     * @returns l'instance actuelle modifiée
     */
    setAddHour(_nbHour: number): Date,

    /**
     * Supprimer une ou des heures à l'instance actuelle 
     * 
     * @param _nbHour nombre(s) d'heure(s) à supprimer
     * @returns l'instance actuelle modifiée
     */
    setRemoveHour(_nbHour: number): Date,

    /**
     * Ajouter une ou des minutes à l'instance actuelle 
     * 
     * @param _nbMinute nombre(s) de minute(s) à ajouter
     * @returns l'instance actuelle modifiée
     */
    setAddMinute(_nbMinute: number): Date,

    /**
     * Supprimer une ou des minutes à l'instance actuelle 
     * 
     * @param _nbMinute nombre(s) de minute(s) à supprimer
     * @returns l'instance actuelle modifiée
     */
    setRemoveMinute(_nbMinute: number): Date,

    /**
     * Ajouter une ou des seconde(s) à l'instance actuelle 
     * 
     * @param _nbSeconde nombre(s) de seconde(s) à ajouter
     * @returns l'instance actuelle modifiée
     */
    setAddSeconde(_nbSeconde: number): Date,

    /**
     * Supprimer une ou des seconde(s) à l'instance actuelle 
     * 
     * @param _nbSeconde nombre(s) de seconde(s) à supprimer
     * @returns l'instance actuelle modifiée
     */
    setRemoveSeconde(_nbSeconde: number): Date,

    /**
     * Donne le nombre d'heure(s) entre la date de l'instance actuelle et la date donnée
     * 
     * @returns Nombre de d'heure(s)
     */
    diffNbHour(_date: Date): number,

    /**
     * Donne le nombre de minute entre la date de l'instance actuelle et la date donnée
     * 
     * @returns Nombre de minute(s)
     */
    diffNbMinute(_date: Date): number,

    /**
     * Donne le nombre de seconde(s) entre la date de l'instance actuelle et la date donnée
     * 
     * @returns Nombre de seconde(s)
     */
    diffNbSeconde(_date: Date): number,

    /**
     * Addictionner le temps entre la date de l'instance actuelle et la date donnée
     * 
     * @returns l'instance actuelle modifier
     */
    addTime(_date: Date): Date,

    /**
     * Soustraire le temps entre la date de l'instance actuelle et la date donnée
     * 
     * @returns l'instance actuelle modifiée
     */
    subtractTime(_date: Date): Date
  }

  interface DateConstructor {
    /**
     * Creer une liste de date entre deux dates (incluse)
     * 
     * @param _from date de debut au format yyyy-mm-dd ou instance Date
     * @param _to date de fin au format yyyy-mm-dd ou instance Date
     */
    createCalendar(_from: string | Date, _to: string | Date): Date[]
  }
} 

//#region date
Date.createCalendar = function(_from: string | Date, _to: string | Date): Date[]
{
    const DATE_DEBUT = typeof _from == "string" ? new Date(_from) : _from;
    const DATE_FIN = typeof _to == "string" ? new Date(_to) : _to; 
    
    const NB_JOUR_DIFF = DATE_DEBUT.diffNbDay(DATE_FIN);     
    
    let liste = [];
    if(DATE_DEBUT < DATE_FIN)
    {
        for (let i = 0; i <= NB_JOUR_DIFF; i++) 
            liste.push(DATE_DEBUT.clone().setAddDay(i));
    }
    else
    {
        for (let i = NB_JOUR_DIFF; i >= 0; i--) 
            liste.push(DATE_DEBUT.clone().setRemoveDay(NB_JOUR_DIFF - i));
    }
    
    return liste;
}

Date.prototype.createCalendarTo = function(_to: string | Date): Date[]
{
    const DATE_FIN = typeof _to == "string" ? new Date(_to) : _to; 
    
    const NB_JOUR_DIFF = this.diffNbDay(DATE_FIN);     
    
    let liste = [];
    if(this < DATE_FIN)
    {
        for (let i = 0; i <= NB_JOUR_DIFF; i++) 
            liste.push(this.clone().setAddDay(i));
    }
    else
    {
        for (let i = NB_JOUR_DIFF; i >= 0; i--) 
            liste.push(this.clone().setRemoveDay(NB_JOUR_DIFF - i));
    }

    return liste;
}

Date.prototype.clone = function(): Date
{    
    return new Date(this.toISODateString());
}

Date.prototype.toFormat = function(_format: string): string
{
    // groupe les caracteres consécutifs ensemble
    const LISTE = _format.match(/(.)\1*/g) || [];

    let dateFormatter = "";    

    for (const element of LISTE) 
    {
       switch (element) 
       {
            case "Y":
            case "YY":
                dateFormatter += this.toLocaleString(navigator.language, { year: element == "YY" ? "2-digit" : "numeric" });
                break;

            case "M":
                dateFormatter += this.toLocaleString(navigator.language, { month: "2-digit" });
                break;

            case "MM":
            case "MMM":
                dateFormatter += this.toLocaleString(navigator.language, { month: element == "MM" ? "short" : "long" });
                break;

            case "D":
                dateFormatter += this.toLocaleString(navigator.language, { day: "2-digit" });
                break;

            case "DD":
            case "DDD":
                dateFormatter += `${this.toLocaleString(navigator.language, { 
                    weekday: element == "DD" ? "short" : "long", 
                    day: "2-digit" 
                })}`
                break;

            case "H":
            case "HH":
                dateFormatter += this.toLocaleString(navigator.language, { hour: element == "HH" ? "2-digit" : "numeric" });

                if(dateFormatter[dateFormatter.length - 1] == "h")
                    dateFormatter = dateFormatter.slice(0, -1).trimEnd();
                break;

            case "m":
                dateFormatter += this.toLocaleString(navigator.language, { minute: "2-digit" });
                break;

            case "S":
                dateFormatter += this.toLocaleString(navigator.language, { second: "2-digit" });
                break;

            default:
                dateFormatter += element;
                break;
       } 
    }

    return dateFormatter.trim();
}

Date.prototype.toISODateString = function() 
{
    let numJour: any = this.getDate();
    let numMois: any = this.getMonth() + 1;

    if(numJour < 10)
        numJour = `0${numJour}`;

    if(numMois < 10)
        numMois = `0${numMois}`;

    return `${this.getFullYear()}-${numMois}-${numJour}`;
}

Date.prototype.toISOTimeString = function() 
{
    return this.toISOString().split('T')[1];
}

Date.prototype.setAddDay = function(_nbDay: number)
{
    this.setDate(this.getDate() + _nbDay);

    return this;
}

Date.prototype.setAddMonth = function(_nbMonth: number): Date
{
    this.setMonth(this.getMonth() + _nbMonth);

    return this;
}

Date.prototype.setAddYear = function(_nbYear: number): Date
{
    this.setFullYear(this.getFullYear() + _nbYear);

    return this;
}

Date.prototype.setRemoveDay = function(_nbDay: number): Date
{
    this.setDate(this.getDate() - _nbDay);

    return this;
}

Date.prototype.setRemoveMonth = function(_nbMonth: number): Date
{
    this.setMonth(this.getMonth() - _nbMonth);

    return this;
}

Date.prototype.setRemoveYear = function(_nbYear: number): Date
{
    this.setFullYear(this.getFullYear() - _nbYear);

    return this;
}

Date.prototype.setStartMonth = function(): Date
{
    this.setDate(1);

    return this;
}

Date.prototype.setEndMonth = function(): Date
{
    this.setAddMonth(1);
    this.setDate(0);

    return this;
}

Date.prototype.setStartWeek = function(): Date
{
    let day = this.getDay();
    let diff = this.getDate() - day + (day == 0 ? -6 : 1); 
  
    this.setDate(diff);
  
    return this;
}

Date.prototype.setEndWeek = function(): Date
{
    return this.setStartWeek().setAddDay(6);
}

Date.prototype.setStartYear = function(): Date
{ 
    this.setMonth(0, 1);
  
    return this;
}

Date.prototype.setEndYear = function()
{ 
    this.setMonth(11, 31);
  
    return this;
}

Date.prototype.diffNbDay = function(_date: Date): number
{
    const DIFF_TEMPS = Math.abs(_date.getTime() - this.getTime());
    const DIFF_JOUR = Math.floor(DIFF_TEMPS / 86_400_000); 

    return DIFF_JOUR;
}

Date.prototype.getDayName = function(): string
{
    return this.toLocaleString(navigator.language, { weekday: "long" });
}

Date.prototype.getMonthName = function(): string
{
    return this.toLocaleString(navigator.language, { month: "long" });
}

Date.prototype.getWeekNumber = function(): number
{
    let date = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));

    // Ajoute 4 jours à la date pour s'assurer que nous sommes toujours dans la semaine ISO 8601 correcte
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    
    const DATE_DEBUT_ANNEE = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

    // 86_400_000 => nombre de millisecondes dans un jour
    const NUMERO_SEMAINE = Math.ceil((((date.getTime() - DATE_DEBUT_ANNEE.getTime()) / 86_400_000) + 1) / 7);
    return NUMERO_SEMAINE;
}

Date.prototype.isWeekend = function(): boolean
{
    const JOUR = this.getDay();

    return JOUR == 0 || JOUR == 6;
}

Date.prototype.isWeek = function(): boolean
{
    const JOUR = this.getDay();

    return JOUR != 0 && JOUR != 6;
}
//#endregion

//#region Partie heure

Date.prototype.setAddHour = function(_nbHour: number): Date
{
    this.setHours(this.getHours() + _nbHour);

    return this;
}

Date.prototype.setRemoveHour = function(_nbHour: number): Date
{
    this.setHours(this.getHours() - _nbHour);

    return this;
}

Date.prototype.setAddMinute = function(_nbMinute: number): Date
{
    this.setMinutes(this.getMinutes() + _nbMinute);

    return this;
}

Date.prototype.setRemoveMinute = function(_nbMinute: number): Date
{
    this.setMinutes(this.getMinutes() - _nbMinute);

    return this;
}

Date.prototype.setAddSeconde = function(_nbSeconde: number): Date
{
    this.setSeconds(this.getSeconds() + _nbSeconde);

    return this;
}

Date.prototype.setRemoveSeconde = function(_nbSeconde: number): Date
{
    this.setSeconds(this.getSeconds() - _nbSeconde);

    return this;
}

Date.prototype.diffNbHour = function(_date: Date): number
{
    const DIFF_TEMPS = Math.abs(_date.getTime() - this.getTime());

    // 3_600_000 => nb milliseconde dans 1 heure
    const DIFF_HEURE = DIFF_TEMPS / 3_600_000;

    return DIFF_HEURE;
}

Date.prototype.diffNbMinute = function(_date: Date): number
{
    const DIFF_TEMPS = Math.abs(_date.getTime() - this.getTime());

    // 60_000 => nb milliseconde dans 1 minute
    const DIFF_MINUTE = DIFF_TEMPS / 60_000;

    return DIFF_MINUTE;
}

Date.prototype.diffNbSeconde = function(_date: Date): number
{
    const DIFF_TEMPS = Math.abs(_date.getTime() - this.getTime());

    // 1_000 => nb milliseconde dans 1 seconde
    const DIFF_SECONDE = DIFF_TEMPS / 1_000;

    return DIFF_SECONDE;
}

Date.prototype.addTime = function(_date: Date): Date
{
    this.setAddHour(_date.getHours())
        .setAddMinute(_date.getMinutes())
        .setAddSeconde(_date.getSeconds());

    return this;
}

Date.prototype.subtractTime = function(_date: Date): Date
{
    this.setRemoveHour(_date.getHours())
        .setRemoveMinute(_date.getMinutes())
        .setRemoveSeconde(_date.getSeconds());

    return this;
}
//#endregion

export {}