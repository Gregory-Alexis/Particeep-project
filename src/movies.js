const movies = [
	{
		id: "1",
		image: "https://www.pro-fil-online.fr/affiches/Ocean_s_8.jpg",
		title: "Oceans 8",
		category: "Comedy",
		synopsis:
			"Cinq ans, huit mois, 12 jours… et le compteur tourne toujours ! C'est le temps qu'il aura fallu à Debbie Ocean pour échafauder le plus gros braquage de sa vie. Elle sait désormais ce qu'il lui faut : recruter une équipe de choc. À commencer par son 'associée' Lou Miller. Ensemble, elles engagent une petite bande d'expertes : Amita, la bijoutière, Constance, l'arnaqueuse, Tammy, la receleuse, Nine Ball, la hackeuse et Rose, la styliste de mode. Le butin convoité est une rivière de diamants d'une valeur de 150 millions de dollars. Le somptueux bijou sera autour du cou de la célèbre star Daphne Kluger qui devrait être l'objet de toutes les attentions au cours du Met Gala, l'événement de l'année. C'est donc un plan en béton armé. À condition que tout s'enchaîne sans la moindre erreur de parcours. Enfin, si les filles comptent repartir de la soirée avec les diamants sans être inquiétées…",
		likes: 17,
		dislikes: 23,
	},
	{
		id: "2",
		image:
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe72cec1-9589-4de7-8305-5727df7fc7e2/dceipx3-49fd463c-f8bb-46b3-bb6c-43ae24257a6a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNzJjZWMxLTk1ODktNGRlNy04MzA1LTU3MjdkZjdmYzdlMlwvZGNlaXB4My00OWZkNDYzYy1mOGJiLTQ2YjMtYmI2Yy00M2FlMjQyNTdhNmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y26yyYGR9PZzi5YnmTDH99Z4C2sUYb8BxhPTCNIWbG4",
		title: "Midnight Sun",
		category: "Comedy",
		synopsis: `Katie Price, 17 ans, est une adolescente comme les autres, ou presque. Elle ne peut en aucun cas être exposée à la lumière du jour, sous peine d’en mourir. La journée, elle compose et joue de la guitare, et observe le monde depuis sa chambre, notamment Charlie Reed, son voisin.
               À la nuit tombée, ses rêves prennent vie ! Elle sort chanter dans la gare près de chez elle. Un soir, elle se retrouve face à Charlie. Lui est instantanément sous le charme et se met en tête de la revoir... Pourront-ils s’aimer au grand jour ?`,
		likes: 225,
		dislikes: 186,
	},
	{
		id: "3",
		image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
		title: "Indestructibles 2",
		category: "Animation",
		synopsis:
			"Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
		likes: 7800,
		dislikes: 2643,
	},
	{
		id: "4",
		image:
			"https://media.senscritique.com/media/000017703233/source_big/Sans_un_bruit.jpg",
		title: "Quiet Place",
		category: "Thriller",
		synopsis:
			"Une famille tente de survivre sous la menace de mystérieuses créatures qui attaquent au moindre bruit. S’ils vous entendent, il est déjà trop tard.",
		likes: 3578,
		dislikes: 1230,
	},
	{
		id: "5",
		image:
			"https://img.filmsactu.net/datas/films/c/r/creed-2/n/creed-2-5bdcb81225bfb.jpg",
		title: "Creed II",
		category: "Drame",
		synopsis:
			"La vie est devenue un numéro d'équilibriste pour Adonis Creed. Entre ses obligations personnelles et son entraînement pour son prochain grand match, il est à la croisée des chemins. Et l'enjeu du combat est d'autant plus élevé que son rival est lié au passé de sa famille. Mais il peut compter sur la présence de Rocky Balboa à ses côtés : avec lui, il comprendra ce qui vaut la peine de se battre et découvrira qu'il n'y a rien de plus important que les valeurs familiales.",
		likes: 160,
		dislikes: 879,
	},
	{
		id: "6",
		image:
			"https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_19736_5a2634c5.jpeg?region=0%2C0%2C540%2C810",
		title: "Jungle Cruise",
		category: "Aventure",
		synopsis:
			"Chercheuse intrépide, la doctoresse Lily Houghton quitte Londres pour explorer la jungle amazonienne à la recherche d’un remède miraculeux. Pour descendre le fleuve, elle engage Frank Wolff, un capitaine roublard aussi douteux que son vieux rafiot délabré. Bien décidée à découvrir l’arbre séculaire dont les extraordinaires pouvoirs de guérison pourraient changer l'avenir de la médecine, Lily se lance dans une quête épique. L’improbable duo va dès lors affronter d’innombrables dangers - sans parler de forces surnaturelles - dissimulés sous la splendeur luxuriante de la forêt tropicale. Alors que les secrets de l’arbre perdu se révèlent peu à peu, les enjeux s’avèrent encore plus grands pour Lily et Frank. Ce n’est pas seulement leur destin qui est en jeu, mais celui de l’humanité tout entière.",
		likes: 11000,
		dislikes: 3478,
	},
	{
		id: "7",
		image: "https://m.media-amazon.com/images/I/91b-IaB9ILL._AC_SY606_.jpg",
		title: "The Conjuring II",
		category: "Horror",
		synopsis:
			"Avant Amityville, il y avait Harrisville… Conjuring : Les dossiers Warren, raconte l'histoire horrible, mais vraie, d'Ed et Lorraine Warren, enquêteurs paranormaux réputés dans le monde entier, venus en aide à une famille terrorisée par une présence inquiétante dans leur ferme isolée… Contraints d'affronter une créature démoniaque d'une force redoutable, les Warren se retrouvent face à l'affaire la plus terrifiante de leur carrière.",
		likes: 12333,
		dislikes: 3231,
	},
	{
		id: "8",
		image: "https://miro.medium.com/max/500/0*xQirCtmOA-D3uAxQ.jpg",
		title: "Seven",
		category: "Thriller",
		synopsis:
			"Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.",
		likes: 7410,
		dislikes: 2369,
	},
	{
		id: "9",
		image:
			"https://static.displate.com/857x1200/displate/2020-03-09/9cea2dbc90e41568d787fb7608fc94d1_f67f0ea30c94dcda84f0150e858ef504.jpg",
		title: "Inception",
		category: "Thriller",
		synopsis:
			"Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
		likes: 4970,
		dislikes: 2792,
	},
	{
		id: "10",
		image:
			"https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg",
		title: "Gone Girl",
		category: "Thriller",
		synopsis:
			"À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ?",
		likes: 2209,
		dislikes: 793,
	},
	{
		id: "11",
		image: "https://www.pro-fil-online.fr/affiches/Ocean_s_8.jpg",
		title: "Oceans 8",
		category: "Comedy",
		synopsis:
			"Cinq ans, huit mois, 12 jours… et le compteur tourne toujours ! C'est le temps qu'il aura fallu à Debbie Ocean pour échafauder le plus gros braquage de sa vie. Elle sait désormais ce qu'il lui faut : recruter une équipe de choc. À commencer par son 'associée' Lou Miller. Ensemble, elles engagent une petite bande d'expertes : Amita, la bijoutière, Constance, l'arnaqueuse, Tammy, la receleuse, Nine Ball, la hackeuse et Rose, la styliste de mode. Le butin convoité est une rivière de diamants d'une valeur de 150 millions de dollars. Le somptueux bijou sera autour du cou de la célèbre star Daphne Kluger qui devrait être l'objet de toutes les attentions au cours du Met Gala, l'événement de l'année. C'est donc un plan en béton armé. À condition que tout s'enchaîne sans la moindre erreur de parcours. Enfin, si les filles comptent repartir de la soirée avec les diamants sans être inquiétées…",
		likes: 17,
		dislikes: 23,
	},
	{
		id: "12",
		image: "https://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg",
		title: "Midnight Sun",
		category: "Comedy",
		synopsis: `Katie Price, 17 ans, est une adolescente comme les autres, ou presque. Elle ne peut en aucun cas être exposée à la lumière du jour, sous peine d’en mourir. La journée, elle compose et joue de la guitare, et observe le monde depuis sa chambre, notamment Charlie Reed, son voisin.
               À la nuit tombée, ses rêves prennent vie ! Elle sort chanter dans la gare près de chez elle. Un soir, elle se retrouve face à Charlie. Lui est instantanément sous le charme et se met en tête de la revoir... Pourront-ils s’aimer au grand jour ?`,
		likes: 252,
		dislikes: 542,
	},
	{
		id: "13",
		image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
		title: "Les indestructibles 2",
		category: "Animation",
		synopsis:
			"Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
		likes: 7800,
		dislikes: 2643,
	},
	{
		id: "14",
		image:
			"https://media.senscritique.com/media/000017703233/source_big/Sans_un_bruit.jpg",
		title: "Sans un bruit",
		category: "Thriller",
		synopsis:
			"Une famille tente de survivre sous la menace de mystérieuses créatures qui attaquent au moindre bruit. S’ils vous entendent, il est déjà trop tard.",
		likes: 3578,
		dislikes: 1230,
	},
	{
		id: "15",
		image:
			"https://www.ecranlarge.com/uploads/image/001/049/creed-ii-affiche-francaise-1049850.jpg",
		title: "Creed II",
		category: "Drame",
		synopsis:
			"La vie est devenue un numéro d'équilibriste pour Adonis Creed. Entre ses obligations personnelles et son entraînement pour son prochain grand match, il est à la croisée des chemins. Et l'enjeu du combat est d'autant plus élevé que son rival est lié au passé de sa famille. Mais il peut compter sur la présence de Rocky Balboa à ses côtés : avec lui, il comprendra ce qui vaut la peine de se battre et découvrira qu'il n'y a rien de plus important que les valeurs familiales.",
		likes: 160,
		dislikes: 879,
	},
	{
		id: "16",
		image: "https://fr.web.img4.acsta.net/pictures/21/05/27/15/44/2102945.jpg",
		title: "Jungle Cruise",
		category: "Aventure",
		synopsis:
			"Chercheuse intrépide, la doctoresse Lily Houghton quitte Londres pour explorer la jungle amazonienne à la recherche d’un remède miraculeux. Pour descendre le fleuve, elle engage Frank Wolff, un capitaine roublard aussi douteux que son vieux rafiot délabré. Bien décidée à découvrir l’arbre séculaire dont les extraordinaires pouvoirs de guérison pourraient changer l'avenir de la médecine, Lily se lance dans une quête épique. L’improbable duo va dès lors affronter d’innombrables dangers - sans parler de forces surnaturelles - dissimulés sous la splendeur luxuriante de la forêt tropicale. Alors que les secrets de l’arbre perdu se révèlent peu à peu, les enjeux s’avèrent encore plus grands pour Lily et Frank. Ce n’est pas seulement leur destin qui est en jeu, mais celui de l’humanité tout entière.",
		likes: 11000,
		dislikes: 3478,
	},
	{
		id: "17",
		image: "https://m.media-amazon.com/images/I/91b-IaB9ILL._AC_SY606_.jpg",
		title: "The Conjuring II",
		category: "Horror",
		synopsis:
			"Avant Amityville, il y avait Harrisville… Conjuring : Les dossiers Warren, raconte l'histoire horrible, mais vraie, d'Ed et Lorraine Warren, enquêteurs paranormaux réputés dans le monde entier, venus en aide à une famille terrorisée par une présence inquiétante dans leur ferme isolée… Contraints d'affronter une créature démoniaque d'une force redoutable, les Warren se retrouvent face à l'affaire la plus terrifiante de leur carrière.",
		likes: 12333,
		dislikes: 3231,
	},
	{
		id: "18",
		image: "https://m.media-amazon.com/images/I/815VVAvdgDL._AC_SL1500_.jpg",
		title: "Seven",
		category: "Thriller",
		synopsis:
			"Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.",
		likes: 7410,
		dislikes: 2369,
	},
	{
		id: "19",
		image:
			"https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F2f3%2F67b%2F15507f6938a57765991bc33949%2Finception%7Cmovies-143692-9001711092.jpg?facedetect=1&quality=85",
		title: "Inception",
		category: "Thriller",
		synopsis:
			"Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
		likes: 4971,
		dislikes: 3797,
	},
	{
		id: "20",
		image:
			"https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg",
		title: "Gone Girl",
		category: "Thriller",
		synopsis:
			"À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ?",
		likes: 2209,
		dislikes: 793,
	},
	{
		id: "21",
		image: "https://www.pro-fil-online.fr/affiches/Ocean_s_8.jpg",
		title: "Oceans 8",
		category: "Comedy",
		synopsis:
			"Cinq ans, huit mois, 12 jours… et le compteur tourne toujours ! C'est le temps qu'il aura fallu à Debbie Ocean pour échafauder le plus gros braquage de sa vie. Elle sait désormais ce qu'il lui faut : recruter une équipe de choc. À commencer par son 'associée' Lou Miller. Ensemble, elles engagent une petite bande d'expertes : Amita, la bijoutière, Constance, l'arnaqueuse, Tammy, la receleuse, Nine Ball, la hackeuse et Rose, la styliste de mode. Le butin convoité est une rivière de diamants d'une valeur de 150 millions de dollars. Le somptueux bijou sera autour du cou de la célèbre star Daphne Kluger qui devrait être l'objet de toutes les attentions au cours du Met Gala, l'événement de l'année. C'est donc un plan en béton armé. À condition que tout s'enchaîne sans la moindre erreur de parcours. Enfin, si les filles comptent repartir de la soirée avec les diamants sans être inquiétées…",
		likes: 17,
		dislikes: 23,
	},
	{
		id: "22",
		image: "https://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg",
		title: "Midnight Sun",
		category: "Comedy",
		synopsis: `Katie Price, 17 ans, est une adolescente comme les autres, ou presque. Elle ne peut en aucun cas être exposée à la lumière du jour, sous peine d’en mourir. La journée, elle compose et joue de la guitare, et observe le monde depuis sa chambre, notamment Charlie Reed, son voisin.
               À la nuit tombée, ses rêves prennent vie ! Elle sort chanter dans la gare près de chez elle. Un soir, elle se retrouve face à Charlie. Lui est instantanément sous le charme et se met en tête de la revoir... Pourront-ils s’aimer au grand jour ?`,
		likes: 252,
		dislikes: 542,
	},
	{
		id: "23",
		image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
		title: "Les indestructibles 2",
		category: "Animation",
		synopsis:
			"Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
		likes: 7800,
		dislikes: 2643,
	},
	{
		id: "24",
		image:
			"https://media.senscritique.com/media/000017703233/source_big/Sans_un_bruit.jpg",
		title: "Sans un bruit",
		category: "Thriller",
		synopsis:
			"Une famille tente de survivre sous la menace de mystérieuses créatures qui attaquent au moindre bruit. S’ils vous entendent, il est déjà trop tard.",
		likes: 3578,
		dislikes: 1230,
	},
	{
		id: "25",
		image:
			"https://www.ecranlarge.com/uploads/image/001/049/creed-ii-affiche-francaise-1049850.jpg",
		title: "Creed II",
		category: "Drame",
		synopsis:
			"La vie est devenue un numéro d'équilibriste pour Adonis Creed. Entre ses obligations personnelles et son entraînement pour son prochain grand match, il est à la croisée des chemins. Et l'enjeu du combat est d'autant plus élevé que son rival est lié au passé de sa famille. Mais il peut compter sur la présence de Rocky Balboa à ses côtés : avec lui, il comprendra ce qui vaut la peine de se battre et découvrira qu'il n'y a rien de plus important que les valeurs familiales.",
		likes: 160,
		dislikes: 879,
	},
	{
		id: "26",
		image: "https://fr.web.img4.acsta.net/pictures/21/05/27/15/44/2102945.jpg",
		title: "Jungle Cruise",
		category: "Aventure",
		synopsis:
			"Chercheuse intrépide, la doctoresse Lily Houghton quitte Londres pour explorer la jungle amazonienne à la recherche d’un remède miraculeux. Pour descendre le fleuve, elle engage Frank Wolff, un capitaine roublard aussi douteux que son vieux rafiot délabré. Bien décidée à découvrir l’arbre séculaire dont les extraordinaires pouvoirs de guérison pourraient changer l'avenir de la médecine, Lily se lance dans une quête épique. L’improbable duo va dès lors affronter d’innombrables dangers - sans parler de forces surnaturelles - dissimulés sous la splendeur luxuriante de la forêt tropicale. Alors que les secrets de l’arbre perdu se révèlent peu à peu, les enjeux s’avèrent encore plus grands pour Lily et Frank. Ce n’est pas seulement leur destin qui est en jeu, mais celui de l’humanité tout entière.",
		likes: 11000,
		dislikes: 3478,
	},
	{
		id: "27",
		image: "https://m.media-amazon.com/images/I/91b-IaB9ILL._AC_SY606_.jpg",
		title: "The Conjuring II",
		category: "Horror",
		synopsis:
			"Avant Amityville, il y avait Harrisville… Conjuring : Les dossiers Warren, raconte l'histoire horrible, mais vraie, d'Ed et Lorraine Warren, enquêteurs paranormaux réputés dans le monde entier, venus en aide à une famille terrorisée par une présence inquiétante dans leur ferme isolée… Contraints d'affronter une créature démoniaque d'une force redoutable, les Warren se retrouvent face à l'affaire la plus terrifiante de leur carrière.",
		likes: 12333,
		dislikes: 3231,
	},
	{
		id: "28",
		image: "https://m.media-amazon.com/images/I/815VVAvdgDL._AC_SL1500_.jpg",
		title: "Seven",
		category: "Thriller",
		synopsis:
			"Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.",
		likes: 7410,
		dislikes: 2369,
	},
	{
		id: "29",
		image:
			"https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F2f3%2F67b%2F15507f6938a57765991bc33949%2Finception%7Cmovies-143692-9001711092.jpg?facedetect=1&quality=85",
		title: "Inception",
		category: "Thriller",
		synopsis:
			"Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
		likes: 4971,
		dislikes: 3797,
	},
	{
		id: "30",
		image:
			"https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg",
		title: "Gone Girl",
		category: "Thriller",
		synopsis:
			"À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ?",
		likes: 2209,
		dislikes: 793,
	},
	{
		id: "31",
		image: "https://www.pro-fil-online.fr/affiches/Ocean_s_8.jpg",
		title: "Oceans 8",
		category: "Comedy",
		synopsis:
			"Cinq ans, huit mois, 12 jours… et le compteur tourne toujours ! C'est le temps qu'il aura fallu à Debbie Ocean pour échafauder le plus gros braquage de sa vie. Elle sait désormais ce qu'il lui faut : recruter une équipe de choc. À commencer par son 'associée' Lou Miller. Ensemble, elles engagent une petite bande d'expertes : Amita, la bijoutière, Constance, l'arnaqueuse, Tammy, la receleuse, Nine Ball, la hackeuse et Rose, la styliste de mode. Le butin convoité est une rivière de diamants d'une valeur de 150 millions de dollars. Le somptueux bijou sera autour du cou de la célèbre star Daphne Kluger qui devrait être l'objet de toutes les attentions au cours du Met Gala, l'événement de l'année. C'est donc un plan en béton armé. À condition que tout s'enchaîne sans la moindre erreur de parcours. Enfin, si les filles comptent repartir de la soirée avec les diamants sans être inquiétées…",
		likes: 17,
		dislikes: 23,
	},
	{
		id: "32",
		image: "https://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg",
		title: "Midnight Sun",
		category: "Comedy",
		synopsis: `Katie Price, 17 ans, est une adolescente comme les autres, ou presque. Elle ne peut en aucun cas être exposée à la lumière du jour, sous peine d’en mourir. La journée, elle compose et joue de la guitare, et observe le monde depuis sa chambre, notamment Charlie Reed, son voisin.
               À la nuit tombée, ses rêves prennent vie ! Elle sort chanter dans la gare près de chez elle. Un soir, elle se retrouve face à Charlie. Lui est instantanément sous le charme et se met en tête de la revoir... Pourront-ils s’aimer au grand jour ?`,
		likes: 252,
		dislikes: 542,
	},
	{
		id: "33",
		image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
		title: "Les indestructibles 2",
		category: "Animation",
		synopsis:
			"Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
		likes: 7800,
		dislikes: 2643,
	},
	{
		id: "34",
		image:
			"https://media.senscritique.com/media/000017703233/source_big/Sans_un_bruit.jpg",
		title: "Sans un bruit",
		category: "Thriller",
		synopsis:
			"Une famille tente de survivre sous la menace de mystérieuses créatures qui attaquent au moindre bruit. S’ils vous entendent, il est déjà trop tard.",
		likes: 3578,
		dislikes: 1230,
	},
	{
		id: "35",
		image:
			"https://www.ecranlarge.com/uploads/image/001/049/creed-ii-affiche-francaise-1049850.jpg",
		title: "Creed II",
		category: "Drame",
		synopsis:
			"La vie est devenue un numéro d'équilibriste pour Adonis Creed. Entre ses obligations personnelles et son entraînement pour son prochain grand match, il est à la croisée des chemins. Et l'enjeu du combat est d'autant plus élevé que son rival est lié au passé de sa famille. Mais il peut compter sur la présence de Rocky Balboa à ses côtés : avec lui, il comprendra ce qui vaut la peine de se battre et découvrira qu'il n'y a rien de plus important que les valeurs familiales.",
		likes: 160,
		dislikes: 879,
	},
	{
		id: "36",
		image: "https://fr.web.img4.acsta.net/pictures/21/05/27/15/44/2102945.jpg",
		title: "Jungle Cruise",
		category: "Aventure",
		synopsis:
			"Chercheuse intrépide, la doctoresse Lily Houghton quitte Londres pour explorer la jungle amazonienne à la recherche d’un remède miraculeux. Pour descendre le fleuve, elle engage Frank Wolff, un capitaine roublard aussi douteux que son vieux rafiot délabré. Bien décidée à découvrir l’arbre séculaire dont les extraordinaires pouvoirs de guérison pourraient changer l'avenir de la médecine, Lily se lance dans une quête épique. L’improbable duo va dès lors affronter d’innombrables dangers - sans parler de forces surnaturelles - dissimulés sous la splendeur luxuriante de la forêt tropicale. Alors que les secrets de l’arbre perdu se révèlent peu à peu, les enjeux s’avèrent encore plus grands pour Lily et Frank. Ce n’est pas seulement leur destin qui est en jeu, mais celui de l’humanité tout entière.",
		likes: 11000,
		dislikes: 3478,
	},
	{
		id: "37",
		image: "https://m.media-amazon.com/images/I/91b-IaB9ILL._AC_SY606_.jpg",
		title: "The Conjuring II",
		category: "Horror",
		synopsis:
			"Avant Amityville, il y avait Harrisville… Conjuring : Les dossiers Warren, raconte l'histoire horrible, mais vraie, d'Ed et Lorraine Warren, enquêteurs paranormaux réputés dans le monde entier, venus en aide à une famille terrorisée par une présence inquiétante dans leur ferme isolée… Contraints d'affronter une créature démoniaque d'une force redoutable, les Warren se retrouvent face à l'affaire la plus terrifiante de leur carrière.",
		likes: 12333,
		dislikes: 3231,
	},
	{
		id: "38",
		image: "https://m.media-amazon.com/images/I/815VVAvdgDL._AC_SL1500_.jpg",
		title: "Seven",
		category: "Thriller",
		synopsis:
			"Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.",
		likes: 7410,
		dislikes: 2369,
	},
	{
		id: "39",
		image:
			"https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F2f3%2F67b%2F15507f6938a57765991bc33949%2Finception%7Cmovies-143692-9001711092.jpg?facedetect=1&quality=85",
		title: "Inception",
		category: "Thriller",
		synopsis:
			"Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
		likes: 4971,
		dislikes: 3797,
	},
	{
		id: "40",
		image:
			"https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg",
		title: "Gone Girl",
		category: "Thriller",
		synopsis:
			"À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ?",
		likes: 2209,
		dislikes: 793,
	},
]

export const movies$ = new Promise((resolve, reject) =>
	setTimeout(resolve, 100, movies)
)
