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

export {}