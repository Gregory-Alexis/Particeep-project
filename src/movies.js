const movies = [
	{
		id: "1",
		image: "https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg",
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
			"https://media.senscritique.com/media/000011284534/source_big/Les_Visiteurs.jpg",
		title: "Les Visiteurs",
		category: "Comedy",
		synopsis: `En l'an de grace 1123, le comte de Montmirail et son fidèle écuyer, Jacquouille la Fripouille, se retrouvent propulsés en l'an 1992 apres avoir bu une potion magique fabriquée par l'enchanteur Eusaebius, censée leur permettre de se défaire d'un terrible sort.`,
		likes: 7812,
		dislikes: 1806,
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
			"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fb86fbeb5d9c6f7d743c54a46d3bd8eccd528068ceeead796f978dd116f935ac._RI_V_TTW_.jpg",
		title: "A Quiet Place II",
		category: "Thriller",
		synopsis:
			"Après les événements mortels survenus dans sa maison, la famille Abbot doit faire face au danger du monde extérieur. Pour survivre, ils doivent se battre en silence. Forcés à s’aventurer en terrain inconnu, ils réalisent que les créatures qui attaquent au moindre son ne sont pas la seule menace qui se dresse sur leur chemin.",
		likes: 3578,
		dislikes: 1230,
	},
	{
		id: "5",
		image:
			"https://images-na.ssl-images-amazon.com/images/I/91pOO16kWpL._UR1200,1600_RI_.jpg",
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
		image: "https://fr.web.img5.acsta.net/pictures/16/08/25/12/14/261619.jpg",
		title: "Les 7 Mercenaires",
		category: "Action",
		synopsis:
			"L’industriel Bartholomew Bogue règne en maître sur la petite ville de Rose Creek. Pour mettre fin au despotisme de l’homme d’affaires, les habitants, désespérés, engagent sept hors-la-loi, chasseurs de primes, joueurs et tueurs à gages – Sam Chisolm, Josh Farraday, Goodnight Robicheaux, Jack Horne, Billy Rocks, Vasquez, et Red Harvest. Alors qu’ils se préparent pour ce qui s’annonce comme une confrontation sans pitié, ces sept mercenaires prennent conscience qu’ils se battent pour bien autre chose que l’argent.",
		likes: 7410,
		dislikes: 2369,
	},
	{
		id: "9",
		image: "https://images-na.ssl-images-amazon.com/images/I/81O3tKzTeyL.jpg",
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
			"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4651306db4501622166aa68b058b20e7a3c598bcfebea4ebc56733301d54fdae._RI_V_TTW_.jpg",
		title: "Shutter Island",
		category: "Thriller",
		synopsis:
			"En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l'île de Shutter Island, dans un hôpital psychiatrique où sont internés de dangereux criminels. L'une des patientes, Rachel Solando, a inexplicablement disparu. Comment la meurtrière a-t-elle pu sortir d'une cellule fermée de l'extérieur ? Le seul indice retrouvé dans la pièce est une feuille de papier sur laquelle on peut lire une suite de chiffres et de lettres sans signification apparente. Oeuvre cohérente d'une malade, ou cryptogramme ?",
		likes: 5209,
		dislikes: 1793,
	},
	{
		id: "11",
		image:
			"https://cdn.imweb.me/upload/S20200101089e3abea1618/1c971ebc3951a.png",
		title: "Avengers",
		category: "Action",
		synopsis: `Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.
Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité`,
		likes: 14786,
		dislikes: 3200,
	},
	{
		id: "12",
		image:
			"https://musicsheetcovers.s3.eu-west-3.amazonaws.com/couv53/155/G0001092155.jpg",
		title: "Avatar",
		category: "Sci-Fi",
		synopsis: `Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des " pilotes " humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.
Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake`,
		likes: 8741,
		dislikes: 2789,
	},
	{
		id: "13",
		image: "https://fr.web.img4.acsta.net/pictures/20/10/29/10/18/4658850.jpg",
		title: "Alita",
		category: "Sci-Fi",
		synopsis: `Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l’âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. Le maître Jedi Qui-Gon Jinn le découvre et entrevoit alors son immense potentiel.
Pendant ce temps, l’armée de droïdes de l’insatiable Fédération du Commerce a envahi Naboo, une planète pacifique, dans le cadre d’un plan secret des Sith visant à accroître leur pouvoir. Pour défendre la reine de Naboo, Amidala, les chevaliers Jedi vont devoir affronter le redoutable Seigneur Sith, Dark Maul.`,
		likes: 17009,
		dislikes: 4862,
	},
	{
		id: "14",
		image: "https://fr.web.img4.acsta.net/pictures/16/08/03/14/54/309880.jpg",
		title: "Lights Out",
		category: "Horror",
		synopsis: `Une famille en proie à une mystérieuse créature qui ne vit que dans le noir.
Petite, Rebecca a toujours eu peur du noir. Mais quand elle est partie de chez elle, elle pensait avoir surmonté ses terreurs enfantines. Désormais, c'est au tour de son petit frère Martin d'être victime des mêmes phénomènes surnaturels qui ont failli lui faire perdre la raison. Car une créature terrifiante, mystérieusement liée à leur mère Sophie, rôde de nouveau dans la maison familiale. Cherchant à découvrir la vérité, Rebecca comprend que le danger est imminent… Surtout dans le noir.`,
		likes: 2209,
		dislikes: 793,
	},
	{
		id: "15",
		image:
			"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8ea8d34063248e698fbd3f9038e326696faaef744f6de4115058a5fec1536a10._RI_V_TTW_.jpg",
		title: "FRIDAY 13",
		category: "Horror",
		synopsis:
			"Jason Voorhes, toujours affublé de son masque de hockey, suit une classe d'étudiants à New York, bien décidé à semer la terreur.",
		likes: 4132,
		dislikes: 3874,
	},
]

export const movies$ = new Promise((resolve, reject) =>
	setTimeout(resolve, 100, movies)
)
