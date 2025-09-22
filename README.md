# Methode d'extension Date

## toFormat

Permet d'avoir la date et / ou l'heure au format voulu

### Exemple
```js
let date = new Date();

// 2000-01-01
date.toFormat("Y-M-D");

// Lundi 1 janvier 2000
date.toFormat("DDD MMM Y");

// 9:00
date.toFormat("H:m");

// 09h00 48
date.toFormat("HHhm S");
```

## toISODateString

Permet d'avoir la date au format `YYYY-MM-DD`

### Exemple
```js
let date = new Date();

date.toISODateString();
```

## toISOTimeString

Permet d'avoir l'heure au format `HH:mm:ss`

### Exemple
```js
let date = new Date();

date.toISOTimeString();
```

## setAddDay & setRemoveDay

Permet d'ajouter ou supprimer un ou des jour(s) à l'intance actuelle  
**ATTENTION**: Les nombre négatifs ne marche pas

```js
let date = new Date();
date.setAddDay(10);
date.setRemoveDay(5);
```

## setAddMonth & setRemoveMonth

Permet d'ajouter ou supprimer un ou des mois à l'intance actuelle  
**ATTENTION**: Les nombre négatifs ne marche pas

```js
let date = new Date();
date.setAddMonth(2);
date.setRemoveMonth(1);
```

## setAddYear & setRemoveYear

Permet d'ajouter ou supprimer un ou des année(s) à l'intance actuelle  
**ATTENTION**: Les nombre négatifs ne marche pas

```js
let date = new Date();
date.setAddYear(10);
date.setRemoveYear(1);
```

## setStartMonth & setEndMonth

Permet de mettre la date au début ou a la fin du mois de l'intance actuelle

### Exemple
```js
let date = new Date();

// 1/1/2000
date.setStartMonth();

// 31/1/2000
date.setEndMonth();
```

## setStartYear & setEndYear

Permet de mettre la date au début ou a la fin de l'année de l'intance actuelle

### Exemple
```js
let date = new Date();

// 1/1/2000
date.setStartYear();

// 31/12/2000
date.setEndYear();
```

## setStartWeek & setEndWeek

Permet de mettre la date au début ou a la fin de la semaine de l'intance actuelle

### Exemple
```js
let date = new Date();

// lundi 1/1/2000
date.setStartWeek();

// dimanche 6/1/2000
date.setEndWeek();
```

## diffNbDay

Permet d'avoir la difference de jour entre deux instances de date

```js
let date = new Date();
let date2 = new Date();

date.diffNbDay(date2);
```

## getDayName

Permet d'avoir le nom du jour de l'instance actuelle

### Exemple
```js
let date = new Date();

// Lundi
date.getDayName();
```

## getDayMonth

Permet d'avoir le nom du mois de l'instance actuelle

### Exemple
```js
let date = new Date();

// Lundi
date.getMonthName();
```

## getWeekNumber

Permet d'avoir le numéro de la semaine de l'instance actuelle

### Exemple
```js
let date  = new Date();

// 1
date.getWeekNumber();
```

## isWeekend

Permet de savoir si on est le weekend

### Exemple
```js
let date  = new Date();
date.isWeekend();
```

## isWeek

Permet de savoir si on est pas le weekend

### Exemple
```js
let date  = new Date();
date.isWeek();
```

# Methode d'extension Date partie heure

## setAddHour & setRemoveHour

Permet d'ajouter ou supprimer des heures à l'instance actuelle

### Exemple
```js
let date = new Date();

date.setAddHour(10);
date.setRemoveHour(10);
```

## setAddMinute & setRemoveMinute

Permet d'ajouter ou supprimer des minutes à l'instance actuelle

### Exemple
```js
let date = new Date();

date.setAddMinute(80);
date.setRemoveMinute(10);
```

## setAddSeconde & setRemoveSeconde

Permet d'ajouter ou supprimer des secondes à l'instance actuelle

### Exemple
```js
let date = new Date();

date.setAddSeconde(80);
date.setRemoveSeconde(10);
```

## diffNbHour

Permet d'avoir la difference d'heure entre deux instances de date

### Exemple
```js
let date = new Date();
let date2 = new Date();

date.diffNbHour(date2);
```

## diffNbMinute

Permet d'avoir la difference de minute entre deux instances de date

### Exemple
```js
let date = new Date();
let date2 = new Date();

date.diffNbMinute(date2);
```

## diffNbSeconde

Permet d'avoir la difference de seconde entre deux instances de date

### Exemple
```js
let date = new Date();
let date2 = new Date();

date.diffNbSeconde(date2);
```

## addTime & removeTime

Permet d'addictionner ou soustraire le temps de deux instances de date

### Exemple
```js
let date = new Date();
let date2 = new Date();

date.addTime(date2);
date.removeTime(date2);
```