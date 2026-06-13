import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-wildalpen";

const campingWildalpen: CampsiteConfig = {
  name: "Camping Wildalpen",
  shortName: "Wildalpen",
  slug: "camping-wildalpen",
  ort: "Wildalpen",
  region: "Steiermark",
  brandKind: "Camping an der Salza",
  regionLong: "Wildalpen · Salzatal · Steiermark",

  heroVariant: "center",

  claim: "Der schönste Platz an der Salza",
  claimEmphasis: "an der Salza",
  emailDetail: "eure Lage direkt am rechten Ufer der Salza",
  intro:
    "Direkt am rechten Ufer der steirischen Salza findest du ebene Plätze, das Rauschen des Flusses und einen Ausgangspunkt für Wildwassersport, Mountainbike-Touren und Wanderungen — Natur pur im Hochschwab.",

  statement: {
    text: "Bei uns rauscht die Salza nur wenige Schritte hinter deinem Vorzelt.",
    emphasis: "wenige Schritte",
  },

  pillars: [
    {
      title: "Direkt an der Salza",
      text: "Camping Wildalpen liegt am rechten Ufer der steirischen Salza — du hörst den Fluss vom Stellplatz aus und bist mitten im Wildwasser-Revier.",
      image: { src: `${IMG}/gallery-904ac0cf0a.webp`, alt: "Campingplatz am Ufer der Salza mit Brücke und Paddlern" },
    },
    {
      title: "Wildwasser vor der Tür",
      text: "Kanu, Kajak, Rafting, Outside oder Canyoning — die Salza bietet Strecken vom Anfänger bis zum Profi, lokale Sportagenturen sind direkt am Ort.",
      image: { src: `${IMG}/gallery-ac98a0ae1b.webp`, alt: "Rafting im Wildwasser der Salza" },
    },
    {
      title: "Persönlich betreut",
      text: "Unser langjähriger Campingwart Konrad Manseer ist am Platz und beantwortet gerne deine Fragen — von der Anreise bis zur Höhlenführung.",
      image: { src: `${IMG}/gallery-57e2c12242.webp`, alt: "Rezeption von Camping Wildalpen" },
    },
  ],

  usps: [
    "Direkt an der Salza",
    "Gratis WLAN",
    "Bäckerservice Mo–Sa",
    "Hunde willkommen",
    "42 CEE-Stromplätze",
    "Warmwasser-Duschen",
  ],

  trust: {
    heading: "Wildwasser, Wald und klares Quellwasser",
    headingEmphasis: "klares Quellwasser",
    intro:
      "Seit Jahren Treffpunkt der Wildwasser-Szene: ein ebener Platz am Fluss, gepflegte Sanitäranlagen, gratis WLAN und ringsum die unberührte Bergwelt des Hochschwab — ehrlich einfach, mitten in der Natur.",
  },

  awards: [],

  saison: { von: "März", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/gallery-4c2c483430.webp`, alt: "Die türkise Salza mit Kajakfahrern vor dem Campingplatz Wildalpen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-b6cd0eeca6.webp`, alt: "Klares Quellwasser im Quellschutzgebiet bei Wildalpen" },
    line: "Im Quellgebiet der Wiener Hochquellenleitung.",
  },

  camping: {
    heading: "Stellplätze und Zeltwiese an der Salza",
    intro:
      "Rasen und ebener Boden auf rund einem Hektar, Platz für etwa 80 Stellplätze — mit Strom, Warmwasser und kurzen Wegen zum Wasser.",
    features: [
      {
        title: "Stellplätze mit Stromanschluss",
        text: "42 CEE-Steckdosen für Wohnwagen und Wohnmobil, ebener Untergrund und Strom direkt am Platz — anschließen und ankommen.",
        image: { src: `${IMG}/gallery-107c8c04cd.webp`, alt: "Wohnwagen mit Vorzelt auf dem Stellplatz" },
      },
      {
        title: "Zeltwiese am Ufer",
        text: "Weiche Wiesenplätze für Zelte, nur wenige Schritte vom Rauschen der Salza entfernt — ideal für Paddler und Naturliebhaber.",
        image: { src: `${IMG}/gallery-a96d9f2b3e.webp`, alt: "Zelte auf der Wiese am Campingplatz Wildalpen" },
      },
      {
        title: "Barrierefrei zugänglich",
        text: "Ein Behinderten-WC mit Dusche und Warmwasser sowie ebene Wege machen den Platz auch mit Handicap gut nutzbar.",
        image: { src: `${IMG}/gallery-5937a7208d.webp`, alt: "Ebener Zeltplatz mit Sanitärgebäude" },
      },
      {
        title: "Warmwasser-Duschen & Service",
        text: "Großzügige Einzel-Duschen mit Warmwasser, Waschmaschine, Trockner und überdachte Geschirrspülbecken — alles gepflegt und nah.",
        image: { src: `${IMG}/gallery-b878039e0c.webp`, alt: "Service- und Sanitärgebäude mit Stellplätzen" },
      },
      {
        title: "Slalomstrecke an der Salza",
        text: "Die Wildwasser-Slalomstrecke liegt direkt am Platz — Treffpunkt für Kanuten, Kajakfahrer und internationale Wettbewerbe.",
        image: { src: `${IMG}/gallery-21514d8e69.webp`, alt: "Slalomstrecke an der Salza beim Campingplatz" },
      },
      {
        title: "Bootslagerung am Platz",
        text: "Kanus und Kajaks liegen direkt neben dem Zelt — von der Wiese bist du in Sekunden im Wildwasser der Salza.",
        image: { src: `${IMG}/gallery-d8a0161e91.webp`, alt: "Kajaks und Zelte auf der Campingwiese" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um Wildalpen",
    intro:
      "Die Salza und das Hochschwab-Gebiet vor der Tür — vom Wildwasser über Höhlen bis zum kostenlosen Waldbad.",
    items: [
      {
        title: "Kanu, Kajak & Rafting",
        text: "Auf der ganzen Länge der Salza gibt es Schwierigkeitsgrade vom Anfänger bis zum Profi — Kurse bei den örtlichen Sportagenturen.",
        image: { src: `${IMG}/gallery-19e5dd490f.webp`, alt: "Paddler auf der Salza vor dem Campingplatz" },
      },
      {
        title: "Arzberghöhle",
        text: "Geführte Höhlenwanderung zum letzten Wohnort des Höhlenbären — mit staatlich geprüften Führern, Anmeldung an der Rezeption.",
        image: { src: `${IMG}/gallery-2a796975e1.webp`, alt: "Geführte Wanderung in der Arzberghöhle" },
      },
      {
        title: "Museum Hochquellenwasser",
        text: "Von Mai bis Oktober erzählt das Museum die Geschichte der Zweiten Wiener Hochquellenleitung, fertiggestellt im Jahr 1910.",
        image: { src: `${IMG}/gallery-27f420c8ac.webp`, alt: "Museum HochQuellenWasser Wildalpen" },
      },
      {
        title: "Wandern mit Weitblick",
        text: "Rund um Wildalpen führen mehrere Rundwanderwege — Hopfgarten-, Krumpen-, Siebensee- und Panorama-Runde mit Blick über die Hochschwab-Bergwelt.",
        image: { src: `${IMG}/gallery-3cdddfd6b8.webp`, alt: "Blick über die Bergwelt rund um Wildalpen Richtung Eisenerz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Wildalpen",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die B24, die Hochschwab-Bundesstraße, erreichst du Wildalpen — aus Richtung Gußwerk/Mariazell oder von Hieflau im Gesäuse.",
      },
      {
        title: "Mit der Bahn",
        text: "Die nächsten Bahnhöfe liegen im Enns- und Gesäusetal (z. B. Hieflau); von dort weiter mit Bus oder Abholung nach Absprache.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Graz und Wien sind jeweils rund zweieinhalb Autostunden entfernt — der letzte Abschnitt führt durchs Salzatal.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke von der Salza",
    headingEmphasis: "Salza",
    intro:
      "Wildwasser, Zeltwiese und das Rauschen des Flusses — ein paar Impressionen vom Platz und seiner Umgebung.",
    tag: "Ende März bis Ende November",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-d53981137b.webp`, alt: "Campingplatz an der Salza mit Brücke und Blumenwiese" },
      { src: `${IMG}/gallery-73990681d0.webp`, alt: "Gruppe mit Kajak-Anhänger am Campingplatz" },
      { src: `${IMG}/gallery-6566d21c74.webp`, alt: "Spielplatz am Campingplatz Wildalpen" },
      { src: `${IMG}/gallery-6b358a9e80.webp`, alt: "Zelte und Wohnmobile auf der Campingwiese" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz an der Salza",
    headingEmphasis: "an der Salza",
    intro:
      "Sag uns Zeitraum und Personenzahl — das Team von Camping Wildalpen meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtwerte pro Nacht inkl. 2 Erwachsene (Erwachsene € 12, Kinder 6–14 J. € 6) · zzgl. € 2 Nächtigungsabgabe p. P., Strom € 6 und Hund € 4 — Preisliste 2025.",
    highlight: { title: "Wildwasser inklusive", text: "Vom Stellplatz bist du in Sekunden an der Salza." },
    categories: [
      { id: "zelt", label: "Zelt- / PKW-Stellplatz", perNight: 28, perExtraGuest: 12 },
      { id: "wohnwagen", label: "Wohnwagen / Wohnmobil", perNight: 30, perExtraGuest: 12 },
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
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Aktiv an der Salza", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingWildalpen;
