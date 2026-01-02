import { Helmet } from "react-helmet";

export function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": "Sprzątanie Na Błysk Wrocław",
    "image": "https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?w=1200",
    "telephone": "+48700800900", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1079,
      "longitude": 17.0385
    },
    "url": "https://sprzatanienablysk.wroclaw.pl",
    "areaServed": "Wrocław",
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>Sprzątanie Na Błysk Wrocław | Profesjonalne Sprzątanie Mieszkań i Biur</title>
      <meta name="description" content="Szybkie i dokładne sprzątanie mieszkań, domów i biur we Wrocławiu. Pranie tapicerki, mycie okien, sprzątanie po remoncie. Zadzwoń i zamów!" />
      <meta name="keywords" content="sprzątanie Wrocław, firma sprzątająca Wrocław, mycie okien, pranie tapicerki Wrocław, sprzątanie biur" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Sprzątanie Na Błysk Wrocław" />
      <meta property="og:description" content="Profesjonalne sprzątanie mieszkań i biur. Sprawdź cennik i zamów usługę już dziś!" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?w=1200" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
