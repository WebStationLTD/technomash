"use client";

import { useEffect, useRef, useState } from "react";

const InteractiveMap = ({ offices = [], height = "70vh", minHeight = "500px" }) => {
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hasValidApiKey, setHasValidApiKey] = useState(false);

  // 📍 ФУНКЦИЯ ЗА ПОЛУЧАВАНЕ НА ТОЧНИ КООРДИНАТИ
  const getOfficeCoordinates = (office, index) => {
    // ✅ ТОЧНИ GPS КООРДИНАТИ ЗА NOVA ZAGORA INDUSTRIAL ZONE
    // Technomash складове - точни координати от вратата: 42.482342°N, 26.025508°E
    const coordinatesMap = {
      0: { lat: 42.482342, lng: 26.025508 }, // Technomash - Nova Zagora Industrial Zone (точни координати)
    };
    return coordinatesMap[index] || { lat: 42.482342, lng: 26.025508 }; // Nova Zagora fallback
  };

  // Проверяваме дали имаме валиден API ключ
  useEffect(() => {
    const apiKey =
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
      "";
    if (apiKey && apiKey.length > 30) {
      setHasValidApiKey(true);
      console.log(
        "🗺️ Google Maps API ключ намерен, зареждаме интерактивната карта..."
      );
    } else {
      console.warn(
        "🗺️ Google Maps API ключ не е конфигуриран правилно. Използваме fallback iframe карта."
      );
      setIsLoaded(true); // Директно показваме fallback
    }
  }, []);

  // Google Maps script loader - само ако има валиден API ключ
  useEffect(() => {
    if (typeof window === "undefined" || !hasValidApiKey) return;

    // Проверяваме дали Google Maps API вече е заредено
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Global error handler за Google Maps грешки
    window.gm_authFailure = () => {
      console.error(
        "🗺️ Google Maps authentication failure - API ключът не е валиден за този домейн"
      );
      setHasValidApiKey(false);
      setIsLoaded(true);
    };

    // Зареждаме Google Maps API само ако не е заредено
    const script = document.createElement("script");
    const apiKey =
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
      "";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    script.onerror = (error) => {
      console.error("Failed to load Google Maps API:", error);
      console.warn(
        "🗺️ Падане към iframe карта... Вероятно API ключът не е настроен за localhost:3000"
      );
      setHasValidApiKey(false);
      setIsLoaded(true);
    };
    document.head.appendChild(script);
    return () => {
      // Cleanup при unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [hasValidApiKey]);

  // Инициализиране на картата
  useEffect(() => {
    if (!isLoaded || !mapRef.current || map || !hasValidApiKey) return;
    try {
      if (!window.google || !window.google.maps) {
        console.error("Google Maps API не е заредено правилно");
        setHasValidApiKey(false);
        return;
      }

      // Nova Zagora координати - центрирано на Technomash складове (точни координати)
      const novaZagoraCenter = { lat: 42.482342, lng: 26.025508 };

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: novaZagoraCenter,
        zoom: 14,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ weight: "2.00" }],
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{ color: "#9c9c9c" }],
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#eeeeee" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7b7b7b" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#46bcec" }, { visibility: "on" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#c8d7d4" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#070707" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_CENTER,
        },
      });

      setMap(mapInstance);
      console.log("🗺️ Интерактивна карта инициализирана успешно!");
    } catch (error) {
      console.error("Error initializing map:", error);
      if (error.message && error.message.includes("RefererNotAllowed")) {
        console.warn(
          "🗺️ RefererNotAllowedMapError - API ключът не е авторизиран за localhost:3000"
        );
      }
      console.warn("🗺️ Падане към iframe карта заради грешка...");
      setHasValidApiKey(false);
    }
  }, [isLoaded, map, hasValidApiKey]);

  // Добавяне на маркери
  useEffect(() => {
    if (!map || !offices.length) return;

    // Изчистваме стари маркери
    markers.forEach((marker) => marker.setMap(null));

    const newMarkers = [];
    const bounds = new window.google.maps.LatLngBounds();

    offices.forEach((office, index) => {
      // Получаваме координатите от функцията
      const coordinates = getOfficeCoordinates(office, index);

      // Custom marker icon - червен цвят за Technomash (#ff2e4a)
      const markerIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: "#ff2e4a", // Technomash red color
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 3,
      };

      const marker = new window.google.maps.Marker({
        position: coordinates,
        map,
        icon: markerIcon,
        title: office.type || "Technomash",
        animation: window.google.maps.Animation.DROP,
      });

      // Info window за всеки маркер
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; max-width: 280px; font-family: system-ui, -apple-system, sans-serif;">
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
              <div style="width: 12px; height: 12px; background: #ff2e4a; border-radius: 50%; margin-right: 8px;"></div>
              <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #1f2937;">${office.type || "Technomash"}</h3>
            </div>
            <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">
              <p style="margin: 4px 0;"><strong>📍 Адрес:</strong><br>${office.address}${office.addressDetails ? "<br>" + office.addressDetails : ""}</p>
              <p style="margin: 4px 0;"><strong>📞 Телефон:</strong> <a href="tel:${office.phone}" style="color: #ff2e4a; text-decoration: none;">${office.phone}</a></p>
              <p style="margin: 4px 0;"><strong>✉️ Имейл:</strong> <a href="mailto:${office.email}" style="color: #ff2e4a; text-decoration: none;">${office.email}</a></p>
              <p style="margin: 4px 0;"><strong>🕒 Работно време:</strong><br>${office.workingHours}</p>
            </div>
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}" target="_blank" style="display: inline-flex; align-items: center; padding: 6px 12px; background: #ff2e4a; color: white; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 500;">
                🧭 Навигация
              </a>
            </div>
          </div>
        `,
      });

      // Отваряне на info window при клик
      marker.addListener("click", () => {
        // Затваряме всички останали info windows
        markers.forEach((m) => m.infoWindow && m.infoWindow.close());
        infoWindow.open(map, marker);
      });

      marker.infoWindow = infoWindow;
      newMarkers.push(marker);
      bounds.extend(coordinates);
    });

    // Центрираме картата да показва всички маркери
    if (newMarkers.length > 1) {
      map.fitBounds(bounds);
      const listener = window.google.maps.event.addListener(map, "idle", () => {
        if (map.getZoom() > 14) map.setZoom(14);
        window.google.maps.event.removeListener(listener);
      });
    } else if (newMarkers.length === 1) {
      // Ако има само един маркер, центрираме на него
      map.setCenter(newMarkers[0].getPosition());
      map.setZoom(14);
    }

    setMarkers(newMarkers);

    // Cleanup
    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [map, offices]);

  if (!isLoaded) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center`} style={{ height, minHeight }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#ff2e4a] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Зареждане на картата...</p>
        </div>
      </div>
    );
  }

  // Ако няма валиден API ключ, показваме красива iframe карта
  if (!hasValidApiKey) {
    return (
      <div className="relative w-full" style={{ height, minHeight }}>
        <div className="w-full h-full bg-gray-100">
          <iframe
            src="https://www.google.com/maps?q=Nova+Zagora+Industrial+Zone+PK+30+Bulgaria&ll=42.482342,26.025508&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
        {/* Модерен floating overlay за iframe карта */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 max-w-sm">
          <div className="flex items-center mb-4">
            <div className="h-3 w-3 bg-[#ff2e4a] rounded-full mr-3"></div>
            <h3 className="font-bold text-gray-900 text-lg">
              Technomash
            </h3>
          </div>
          <div className="space-y-3">
            {offices.map((office, index) => (
              <div key={office.id || index} className="group cursor-pointer">
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors">
                  <div
                    className="h-4 w-4 bg-[#ff2e4a] rounded-full mt-1 flex-shrink-0"
                  ></div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {office.type || "Technomash"}
                    </p>
                    <p className="text-xs text-gray-600">{office.address}</p>
                    {office.addressDetails && (
                      <p className="text-xs text-gray-500">
                        {office.addressDetails}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* API Key notice */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Добави Google Maps API за интерактивни функции
            </p>
          </div>
        </div>
        {/* Декоративни елементи */}
        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
          <p className="text-xs font-medium text-gray-700">
            🏢 Нова Загора, България
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height, minHeight }}>
      <div ref={mapRef} className="w-full h-full" />
      {/* Красиво интерактивно каре с офисите - горе вляво (само на десктоп) */}
      {offices.length > 0 && (
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 max-w-sm hidden lg:block">
          <div className="flex items-center mb-4">
            <div
              className="h-3 w-3 rounded-full mr-3"
              style={{
                backgroundColor: "#ff2e4a",
                border: "1px solid #ffffff",
              }}
            ></div>
            <h3 className="font-bold text-gray-900 text-lg">
              Technomash
            </h3>
          </div>
          <div className="space-y-3">
            {offices.map((office, index) => {
              const coordinates = getOfficeCoordinates(office, index);
              return (
                <div key={office.id || index} className="group cursor-pointer">
                  <div
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      // Центрираме картата на офиса при клик
                      if (map) {
                        map.setCenter(coordinates);
                        map.setZoom(16);
                        // Намираме съответния маркер и отваряме info window
                        const targetMarker = markers.find((marker) => {
                          const pos = marker.getPosition();
                          return (
                            Math.abs(pos.lat() - coordinates.lat) < 0.0001 &&
                            Math.abs(pos.lng() - coordinates.lng) < 0.0001
                          );
                        });
                        if (targetMarker && targetMarker.infoWindow) {
                          // Затваряме всички останали info windows
                          markers.forEach(
                            (m) => m.infoWindow && m.infoWindow.close()
                          );
                          targetMarker.infoWindow.open(map, targetMarker);
                        }
                      }
                    }}
                  >
                    <div
                      className="h-4 w-4 rounded-full mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: "#ff2e4a",
                        border: "2px solid #ffffff",
                      }}
                    ></div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-[#ff2e4a] transition-colors duration-300">
                        {office.type || "Technomash"}
                      </p>
                      <p className="text-xs text-gray-600">{office.address}</p>
                      {office.addressDetails && (
                        <p className="text-xs text-gray-500">
                          {office.addressDetails}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        📞 {office.phone}
                      </p>
                    </div>
                    {/* Стрелка която се появява при hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-[#ff2e4a]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Допълнителна информация */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Кликнете за центриране и детайли
            </p>
          </div>
        </div>
      )}
      {/* Декоративни елементи */}
      <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
        <p className="text-xs font-medium text-gray-700">🏢 Нова Загора, България</p>
      </div>
      {/* Loading overlay при първоначално зареждане */}
      {!map && hasValidApiKey && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#ff2e4a] border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">
              Инициализиране на картата...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
