import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-wildalpen";

const campingWildalpen: CampsiteConfig = {
  name: "Camping Wildalpen",
  shortName: "Wildalpen",
  slug: "camping-wildalpen",
  ort: "Wildalpen",
  region: "Steiermark",
  brandKind: "Camping",
  regionLong: "Wildalpen · Salzatal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Der schönste Platz an der Salza",
  claimEmphasis: "an der Salza",
  emailDetail: "eure Lage am rechten Ufer der Salza",
  intro:
    "Ebene Stell- und Zeltplätze direkt am rechten Ufer der Salza — bei uns startest du in Wildwassersport, Höhlenwanderungen und ruhige Abende am Lagerfeuer, mitten in den steirischen Bergen.",

  statement: {
    text: "Hier rauscht die Salza nur wenige Schritte hinter deinem Vorzelt.",
    emphasis: "wenige Schritte",
  },

  pillars: [
    {
      title: "Am rechten Ufer der Salza",
      text: "Der Campingplatz liegt unmittelbar am Wasser — Kanus und Kajaks starten gleich neben den Stellplätzen.",
      image: { src: `${IMG}/gallery-904ac0cf0a.webp`, alt: "Campingplatz Wildalpen am Ufer der Salza mit Kajakfahrern" },
    },
    {
      title: "Wildwasser-Revier",
      text: "Kajak, Kanu, Rafting, Outside und Canyoning: Auf der Salza findest du Strecken vom Anfänger bis zum Profi.",
      image: { src: `${IMG}/gallery-ac98a0ae1b.webp`, alt: "Rafting auf der türkisen Salza bei Wildalpen" },
    },
    {
      title: "Camping im Grünen",
      text: "Ein Hektar Wiese mit Platz für rund 80 Stellplätze, umrahmt von Wald und Bergen — Natur, so weit du schaust.",
      image: { src: `${IMG}/gallery-b878039e0c.webp`, alt: "Zelte auf der grünen Wiese des Camping Wildalpen vor Bergkulisse" },
    },
  ],

  usps: [
    "Direkt an der Salza",
    "Gratis WLAN",
    "42 CEE-Stromplätze",
    "Barrierefreies WC & Dusche",
    "Bäckerservice am Platz",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Darauf ist in Wildalpen Verlass",
    headingEmphasis: "Wildalpen",
    intro:
      "Seit Jahren Treffpunkt für Wildwasser-Sportler und Bergfreunde: ehrliche Preise, ein hilfsbereiter Campingwart und ein Platz, an dem für dich das Rauschen der Salza den Takt vorgibt.",
  },

  awards: [],

  saison: { von: "März", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/gallery-4c2c483430.webp`, alt: "Camping Wildalpen am Ufer der Salza, eingebettet in die steirischen Berge" },
  },

  camping: {
    heading: "Camping an der Salza",
    intro:
      "Ein Hektar ebene Wiese mit rund 80 Stellplätzen auf Rasen, warme Duschen, Stromanschlüsse, Gratis-WLAN und sogar Bäckerservice am Morgen — alles für entspannte Tage am Fluss.",
    features: [
      {
        title: "Stellplätze unter Bäumen",
        text: "Ebene Plätze für Wohnwagen, Wohnmobil und Bus mit 42 CEE-Steckdosen und Stromanschluss — schattig unter alten Bäumen am Flussufer.",
        image: { src: `${IMG}/gallery-107c8c04cd.webp`, alt: "Wohnwagen mit Vorzelt auf einem Stellplatz am Camping Wildalpen" },
      },
      {
        title: "Zeltwiese & Barrierefreiheit",
        text: "Weiche Wiese für Zelte, dazu ein barrierefreies WC mit Dusche und Warmwasser — Camping, das für alle passt.",
        image: { src: `${IMG}/gallery-5937a7208d.webp`, alt: "Zelte auf der Wiese vor dem Sanitärgebäude am Camping Wildalpen" },
      },
      {
        title: "Rezeption & Campingwart",
        text: "An der Rezeption hilft dir unser langjähriger Campingwart Konrad Manseer weiter und kennt jeden Wanderweg der Umgebung.",
        image: { src: `${IMG}/gallery-57e2c12242.webp`, alt: "Rezeption des Camping Wildalpen mit Zelten und Bergkulisse" },
      },
      {
        title: "Bootseinstieg an der Salza",
        text: "Kanu, Kajak und Schlauchboot wassern direkt neben dem Platz ein — die Salza mit ihrer Slalomstrecke beginnt am Ufer.",
        image: { src: `${IMG}/gallery-21514d8e69.webp`, alt: "Bootseinstieg mit Slalomstangen und Kajaks an der Salza beim Camping Wildalpen" },
      },
      {
        title: "Spielplatz für Kinder",
        text: "Ein eigener Spielplatz mit Rutsche und Klettergerüst sorgt dafür, dass auch die Kleinsten ihren Campingurlaub lieben.",
        image: { src: `${IMG}/gallery-6566d21c74.webp`, alt: "Spielplatz mit Rutsche am Camping Wildalpen" },
      },
      {
        title: "Stellplätze am Wildwasser",
        text: "Viele Plätze liegen in der ersten Reihe zur Salza — vom Vorzelt aus schaust du den Wildwasser-Booten direkt zu.",
        image: { src: `${IMG}/gallery-19e5dd490f.webp`, alt: "Wildwasserstrecke der Salza direkt vor den Stellplätzen des Camping Wildalpen" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Abenteuer rund um Wildalpen",
    intro:
      "Wildwassersport vor der Tür, geführte Höhlenwanderungen und kilometerweite Wanderwege — Wildalpen ist ein Spielplatz für Aktive.",
    items: [
      {
        title: "Kajak, Kanu & Rafting",
        text: "Auf der Salza gibt es Strecken für jedes Können — Anfängerkurse bei den örtlichen Sportagenturen inklusive.",
        image: { src: `${IMG}/gallery-73990681d0.webp`, alt: "Gruppe mit Kajaks auf einem Anhänger an der Salza in Wildalpen" },
      },
      {
        title: "Arzberghöhle",
        text: "Auf den Spuren des Höhlenbären: geführte Höhlenwanderungen meldest du an der Rezeption an, Gruppen bis zwölf Personen.",
        image: { src: `${IMG}/gallery-2a796975e1.webp`, alt: "Geführte Höhlenwanderung in der Arzberghöhle bei Wildalpen" },
      },
      {
        title: "Wandern & Mountainbike",
        text: "Fünf Rundwanderwege und zwei Mountainbike-Strecken starten in Wildalpen — die Folder bekommst du beim Campingwart.",
        image: { src: `${IMG}/gallery-d53981137b.webp`, alt: "Brücke über die Salza im Tal bei Wildalpen, Ausgangspunkt für Wanderungen" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Salzatal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 (Abfahrt Liezen) oder von Norden über Göstling und die B24 ins Salzatal — der Platz ist in Wildalpen ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Hieflau im Gesäuse; von dort weiter mit dem Bus oder Abholung nach Wildalpen auf Anfrage.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen von der Salza",
    headingEmphasis: "Salza",
    intro:
      "Türkises Wasser, Zelte auf der Wiese und bunte Boote am Ufer — ein paar Eindrücke von einem Sommer am Camping Wildalpen.",
    tag: "März bis November",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-6b358a9e80.webp`, alt: "Zelte und Wohnmobile auf der Sommerwiese am Camping Wildalpen" },
      { src: `${IMG}/gallery-dcfb4e6ac1.webp`, alt: "Bunte Kajaks am Ufer der Salza beim Camping Wildalpen" },
      { src: `${IMG}/gallery-cb0299951a.webp`, alt: "Gruppe beim Aufwärmen vor der Tour an der Salza" },
      { src: `${IMG}/gallery-d3c6cdcc72.webp`, alt: "Frühlingstag am Camping Wildalpen mit Wiese und Bergen" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz an der Salza",
    headingEmphasis: "an der Salza",
    intro:
      "Sag uns Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit und allen Infos zur Anreise.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise je Nacht für 2 Erwachsene inkl. Stellplatz und Nächtigungsabgabe — Strom € 6, Hund € 4 und Kinder (6–14 J.) € 6 pro Tag zusätzlich (Preisliste 2025).",
    highlight: {
      title: "Mitten im Wildwasser-Revier",
      text: "Bootseinstieg und Slalomstrecke der Salza liegen direkt am Platz.",
    },
    categories: [
      { id: "zelt", label: "Zelt / PKW", perNight: 32, perExtraGuest: 14 },
      { id: "wohnwagen", label: "Wohnwagen & Wohnmobil", perNight: 34, perExtraGuest: 14 },
    ],
  },

  kontakt: {
    tel: "+43 3636 342",
    telHref: "tel:+433636342",
    mail: "info@camping-wildalpen.at",
    adresse: "Hopfgarten 298 · 8924 Wildalpen · Steiermark",
    coords: { lat: 47.665275, lng: 14.987971, approx: true },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Lage am Fluss", href: "#camping" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingWildalpen;
