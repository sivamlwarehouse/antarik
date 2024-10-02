"use client";

import React, { useState, useEffect } from "react";
import { format, addDays } from "date-fns";
import "./dashboard.css";

const Dashboard = () => {
  const [state, setState] = useState({
    isSidebarOpen: false,
    backgroundImageUrl: "/img.jpg",
    backgroundImageSize: "cover",
    zoomLevel: 100,
    activeDay: new Date(),
    showDayBar: false,
    showCycloneButtons: false,
    showRiverButtons: false,
    showPrecipitationMmeButtons: false,
    showExtendedPrecipitationButtons: false,
    activeDayIndex: 0,
    selectedContinent: "",
    selectedCyclone: "",
    selectedRiver: "",
    isLoading: false,
    selectedTempOption: "",
    selectedTempType: "",
    selectedDewOption: "",
    selectedDewType: "",
    selectedPrecipitationMmeMonth: "",
    selectedExtendedPrecipitationWeek: "",
    selectedMslType: false,
    selectedHumidityType: false,
    selectedWindType: false,
    selectedCapeType: false,
    selectedDustStormType: false,
    selectedPrecipitationType: false,
    selectedWindGustType: false,
    selectedMultiHazardType: false,
    selectedHailProbabilityType: false,
    selectedKIndexType: false,
    selectedSevereWeatherType: false, // Track Severe Weather selection
    selectedCycloneType: false,
    selectedInflowForecastType: false,
    selectedPrecipitationMmeType: false,
    selectedExtendedPrecipitationType: false,
    tempUrls: [],
    dewUrls: [],
    mslUrls: [],
    humidityUrls: [],
    windUrls: [],
    capeUrls: [],
    dustStormUrls: [],
    precipitationUrls: [],
    windGustUrls: [],
    multiHazardUrls: [],
    hailProbabilityUrls: [],
    kIndexUrls: [],
    severeWeatherUrls: [],
    cycloneUrls: {},
    inflowForecastUrls: {},
    precipitationMmeWeeklyUrls: [],
    precipitationMmeMonthlyUrls: {},
    extendedPrecipitationUrls: {},
    activeImageUrl: "",
    showContinents: false,
    showTemperatureMenu: false,
    showDewMenu: false,
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const continents = ["ASIA", "EUROPE", "MIDDLE_EAST", "WORLD", "INDIA"];
  const listOfPossibleNames = [
    "EP_Cyclone",
    "IO_Cyclone",
    "WP_Cyclone",
    "AO_Cyclone",
  ];
  // Fetch temperature images
  const fetchTemperatureImages = async (type, date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    const queryType = `${type}_${formattedDate}`;
    try {
      const response = await fetch(
        `/api/temp?type=${queryType}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        tempUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching temperature images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        tempUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "/img.jpg",
      }));
    }
  };

  // Fetch dew point images
  const fetchDewImages = async (type, date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    const queryType = `${type}_${formattedDate}`;
    try {
      const response = await fetch(
        `/api/dew?type=${queryType}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        dewUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching dew images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        dewUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch MSL images
  const fetchMslImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/msl?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        mslUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching MSL images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        mslUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch relative humidity images
  const fetchHumidityImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/relative-humidity?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        humidityUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching humidity images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        humidityUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch wind speed and direction images
  const fetchWindImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/wind-speed?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        windUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching wind images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        windUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch CAPE images
  const fetchCapeImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/cape?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        capeUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching CAPE images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        capeUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch dust storm images
  const fetchDustStormImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/dust-storm?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        dustStormUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching dust storm images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        dustStormUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch total precipitation images
  const fetchPrecipitationImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/total-precipitation?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        precipitationUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching precipitation images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        precipitationUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch wind gust speed images
  const fetchWindGustImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/wind-gust-speed?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        windGustUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching wind gust images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        windGustUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch multi-hazard images
  const fetchMultiHazardImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/multi-hazard?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        multiHazardUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching multi-hazard images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        multiHazardUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch hail probability images
  const fetchHailProbabilityImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/hail-probability-index?date=${formattedDate}&region=${region}`
      );
      console.log(response)
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        hailProbabilityUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching hail probability images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        hailProbabilityUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch K-Index images
  const fetchKIndexImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/k-index?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        kIndexUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching K-Index images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        kIndexUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  // Fetch severe weather images
  const fetchSevereWeatherImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/severe-weather?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        severeWeatherUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching severe weather images:", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        severeWeatherUrls: [],
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  const fetchCycloneImages = async (region) => {
    try {
      const response = await fetch(`/api/cyclone?region=${region}`);
      console.log(region);

      console.log(response);

      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        cycloneUrls: data,
        backgroundImageUrl: data[0],
        activeImageUrl: data[0],
        isLoading: false,
        showDayBar: false,
      }));
    } catch (error) {
      console.error("Error fetching Cyclone Images: ", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        cycloneUrls: {},
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  const fetchInflowForecastImages = async (region) => {
    try {
      const response = await fetch(`/api/inflow-forecast?region=${region}`);
      console.log(`/api/inflow-forecast?region=${region}`)
      console.log("Inside Inflow Forecast")
      console.log("Response: ", response)
      const data = await response.json();
      console.log(data);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        inflowForecastUrls: data,
        backgroundImageUrl: "",
        activeImageUrl: "",
        showDayBar: false,
      }));
    } catch (error) {
      console.error("Error fetching Inflow Forecast Images: ", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        inflowForecastUrls: {},
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  const fetchPrecipitationMmeImages = async (date, region) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    try {
      const response = await fetch(
        `/api/precipitation-mme?date=${formattedDate}&region=${region}`
      );
      const data = await response.json();
      console.log(data)
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        precipitationMmeWeeklyUrls: data?.weekly || {},
        precipitationMmeMonthlyUrls: data?.monthly || {},
        activeImageUrl: data?.monthly[0] || "/img.jpg",
        backgroundImageUrl: data?.monthly[0] || "/img.jpg",
        showPrecipitationMmeButtons: true,
      }));
    } catch (error) {
      console.error("Error fetching Precipitation MME Images: ", error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        precipitationMmeWeeklyUrls: {},
        precipitationMmeMonthlyUrls: {},
        backgroundImageUrl: "/img.jpg",
        activeImageUrl: "",
      }));
    }
  };

  const fetchExtendedPrecipitationType = async (region) => {
    try {
      const response = await fetch(
        `/api/extended-precipitation?region=${region}`
      );
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        extendedPrecipitationUrls: data,
        activeImageUrl: "",
        backgroundImageUrl: "/img.jpg",
        showExtendedPrecipitationButtons: true,
      }));
    } catch (error) {
      console.error(
        "Error fetching Extended Precipitation Forecast Images: ",
        error
      );
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        extendedPrecipitationUrls: {},
        activeImageUrl: "",
        backgroundImageUrl: "/img.jpg",
      }));
    }
  };

  useEffect(() => {
    if (state.selectedContinent && state.activeDay) {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      if (state.selectedTempType) {
        fetchTemperatureImages(
          state.selectedTempType,
          state.activeDay,
          state.selectedContinent
        );
      } else if (state.selectedDewType) {
        fetchDewImages(
          state.selectedDewType,
          state.activeDay,
          state.selectedContinent
        );
      } else if (state.selectedMslType) {
        fetchMslImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedHumidityType) {
        fetchHumidityImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedWindType) {
        fetchWindImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedCapeType) {
        fetchCapeImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedDustStormType) {
        fetchDustStormImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedPrecipitationType) {
        fetchPrecipitationImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedWindGustType) {
        fetchWindGustImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedMultiHazardType) {
        fetchMultiHazardImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedHailProbabilityType) {
        fetchHailProbabilityImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedKIndexType) {
        fetchKIndexImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedSevereWeatherType) {
        fetchSevereWeatherImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedCycloneType) {
        fetchCycloneImages(state.selectedContinent);
      } else if (state.selectedInflowForecastType) {
        fetchInflowForecastImages(state.selectedContinent);
      } else if (state.selectedPrecipitationMmeType) {
        fetchPrecipitationMmeImages(state.activeDay, state.selectedContinent);
      } else if (state.selectedExtendedPrecipitationType) {
        fetchExtendedPrecipitationType(state.selectedContinent);
      }
    }
  }, [
    state.selectedContinent,
    state.activeDay,
    state.selectedTempType,
    state.selectedDewType,
    state.selectedMslType,
    state.selectedHumidityType,
    state.selectedWindType,
    state.selectedCapeType,
    state.selectedDustStormType,
    state.selectedPrecipitationType,
    state.selectedWindGustType,
    state.selectedMultiHazardType,
    state.selectedHailProbabilityType,
    state.selectedKIndexType,
    state.selectedSevereWeatherType,
    state.selectedCycloneType,
    state.selectedInflowForecastType,
    state.selectedPrecipitationMmeType,
    state.selectedExtendedPrecipitationType,
  ]);

  const handleMenuClick = (type) => {
    setState((prevState) => ({
      ...prevState,
      selectedTempOption: type,
      selectedTempType: type,
      showContinents: true,
      showDayBar: false,
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleDewMenuClick = (type) => {
    setState((prevState) => ({
      ...prevState,
      selectedDewOption: type,
      selectedDewType: type,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleMslClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedMslType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleHumidityClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedHumidityType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleWindClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedWindType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleCapeClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedCapeType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleDustStormClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedDustStormType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handlePrecipitationClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPrecipitationType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleWindGustClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedWindGustType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleMultiHazardClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedMultiHazardType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleHailProbabilityClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedHailProbabilityType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedKIndexType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleKIndexClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedKIndexType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedSevereWeatherType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleSevereWeatherClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedSevereWeatherType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedContinent: "",
    }));
  };

  const handleCycloneClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedCycloneType: true,
      showContinents: true,
      showDayBar: false,
      showCycloneButtons: true,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedSevereWeatherType: false,
      selectedContinent: "",
    }));
  };

  const handlePrecipitationMmeClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPrecipitationMmeType: true,
      selectedCycloneType: false,
      showContinents: true,
      showDayBar: false,
      showCycloneButtons: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedRiver: "",
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedSevereWeatherType: false,
      selectedContinent: "",
    }));
  };

  const handleInflowForecastClick = () => {
    setState((prevState) => ({
      ...prevState,
      selectedInflowForecastType: true,
      showRiverButtons: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedExtendedPrecipitationType: false,
      showExtendedPrecipitationButtons: false,
      selectedExtendedPrecipitationWeek: "",
      selectedSevereWeatherType: false,
      selectedContinent: "",
    }));
  };

  const handleExtendedPrecipitationForecast = () => {
    setState((prevState) => ({
      ...prevState,
      selectedExtendedPrecipitationType: true,
      showContinents: true,
      showDayBar: false,
      selectedTempType: "",
      selectedDewType: "",
      selectedMslType: false,
      selectedHumidityType: false,
      selectedWindType: false,
      selectedCapeType: false,
      selectedDustStormType: false,
      selectedPrecipitationType: false,
      selectedWindGustType: false,
      selectedMultiHazardType: false,
      selectedHailProbabilityType: false,
      selectedKIndexType: false,
      selectedCyclone: "",
      showCycloneButtons: false,
      selectedCycloneType: false,
      showPrecipitationMmeButtons: false,
      selectedPrecipitationMmeMonth: "",
      selectedPrecipitationMmeType: false,
      selectedInflowForecastType: false,
      showRiverButtons: false,
      selectedSevereWeatherType: false,
      selectedRiver: "",
      selectedContinent: "",
    }));
  };

  const handleContinentClick = (continent) => {
    if (state.selectedCycloneType) {
      setState((prevState) => ({
        ...prevState,
        selectedContinent: continent,
        showCycloneButtons: true,
      }));
    } else if (state.selectedExtendedPrecipitationType) {
      setState((prevState) => ({
        ...prevState,
        selectedContinent: continent,
        showExtendedPrecipitationButtons: true,
      }));
    } else if (state.selectedPrecipitationMmeType) {
      setState((prevState) => ({
        ...prevState,
        selectedContinent: continent,
        showDayBar: false,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        selectedContinent: continent,
        showDayBar: true,
      }));
    }
  };

  const handleDayClick = (index) => {
    const newDate = addDays(new Date(), index);
    setState((prevState) => ({
      ...prevState,
      activeDay: newDate,
      activeDayIndex: index,
    }));
  };

  const handleCycloneTypeClick = (cycloneName, url) => {
    setState((prevState) => ({
      ...prevState,
      selectedCyclone: cycloneName,
      backgroundImageUrl: url,
      activeImageUrl: url,
    }));
  };

  const handleRiverButtonClick = (riverName, url) => {
    setState((prevState) => ({
      ...prevState,
      selectedRiver: riverName,
      backgroundImageUrl: url,
      activeImageUrl: url,
    }));
  };

  const handlePrecipitationMmeMonthlyButtonClick = (month, url) => {
    setState((prevState) => ({
      ...prevState,
      backgroundImageUrl: url,
      activeImageUrl: url,
      selectedPrecipitationMmeMonth: month,
    }));
  };

  const handleExtendedPrecipitationForecastButtonClick = (week, url) => {
    setState((prevState) => ({
      ...prevState,
      backgroundImageUrl: url,
      activeImageUrl: url,
      selectedExtendedPrecipitationWeek: week,
    }));
  };

  const toggleSidebar = () => {
    setState((prevState) => ({
      ...prevState,
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  const handleZoomIn = () => {
    setState((prevState) => ({
      ...prevState,
      zoomLevel: Math.min(prevState.zoomLevel + 10, 200),
    }));
  };

  const handleZoomOut = () => {
    setState((prevState) => ({
      ...prevState,
      zoomLevel: Math.max(prevState.zoomLevel - 10, 50),
    }));
  };

  const handleMouseDown = (event) => {
    setState((prevState) => ({
      ...prevState,
      isDragging: true,
      startX: event.clientX,
      startY: event.clientY,
    }));
  };

  const handleMouseMove = (event) => {
    if (!state.isDragging) return;
    const xDiff = event.clientX - state.startX;
    const yDiff = event.clientY - state.startY;

    setState((prevState) => ({
      ...prevState,
      backgroundPositionX: prevState.backgroundPositionX + xDiff,
      backgroundPositionY: prevState.backgroundPositionY + yDiff,
      startX: event.clientX,
      startY: event.clientY,
    }));
  };

  const handleMouseUp = () => {
    setState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const toggleTemperatureMenu = () => {
    setState((prevState) => ({
      ...prevState,
      showTemperatureMenu: !prevState.showTemperatureMenu,
    }));
  };

  const toggleDewMenu = () => {
    setState((prevState) => ({
      ...prevState,
      showDewMenu: !prevState.showDewMenu,
    }));
  };

  const backgroundStyle = {
    backgroundImage: `url(${state.backgroundImageUrl})`,
    backgroundSize: state.backgroundImageSize,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
  };

  const zoomControlsRightPosition = state.isSidebarOpen ? "324px" : "65px";

  const dayButtons = daysOfWeek.map((day, index) => (
    <button
      key={day}
      onClick={() => handleDayClick(index)}
      className={`day-button ${index === state.activeDayIndex ? "active" : ""}`}
    >
      {format(addDays(new Date(), index), "EEE")}
    </button>
  ));

  const cycloneButtons = listOfPossibleNames.map((cycloneName) => (
    <button
      key={cycloneName}
      onClick={() =>
        handleCycloneTypeClick(cycloneName, state.cycloneUrls[cycloneName])
      }
      className={`day-button ${state.cycloneUrls[cycloneName] === state.activeImageUrl ? "active" : ""
        }`}
    >
      {cycloneName.replace(/_/g, " ")}
    </button>
  ));

  const riverButtons = Object.keys(state.inflowForecastUrls).map(
    (riverName) => (
      <button
        key={riverName}
        onClick={() =>
          handleRiverButtonClick(riverName, state.inflowForecastUrls[riverName])
        }
        className={` day-button ${state.inflowForecastUrls[riverName] === state.activeImageUrl
          ? "active"
          : ""
          }`}
      >
        {riverName.replace(/_/g, " ")}
      </button>
    )
  );

  const precipitationMmeMonthlyButtons = Object.keys(
    state.precipitationMmeMonthlyUrls
  ).map((month) => {
    return (
      <button
        key={month}
        onClick={() =>
          handlePrecipitationMmeMonthlyButtonClick(
            month,
            state.precipitationMmeMonthlyUrls[month]
          )
        }
        className={`px-4 py-2 mx-2 rounded-md text-white
        ${state.selectedPrecipitationMmeMonth === month
            ? "bg-blue-500"
            : "bg-black/50"
          }`}
      >
        {month}
      </button>
    );
  });

  const extendedPrecipitationButtons = Object.keys(
    state.extendedPrecipitationUrls
  ).map((week) => {
    return (
      <button
        onClick={() =>
          handleExtendedPrecipitationForecastButtonClick(
            week,
            state.extendedPrecipitationUrls[week]
          )
        }
        className={`px-4 py-2 mx-2 rounded-md text-white
        ${state.selectedExtendedPrecipitationWeek === week
            ? "bg-blue-500"
            : "bg-black/50"
          }`}
      >
        {week}
      </button>
    );
  });

  return (
    <div
      style={backgroundStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {state.isLoading && (
        <div className="loading-overlay">
          <div className="loading-text">Loading...</div>
        </div>
      )}

      <div
        className="zoom-controls"
        style={{ right: zoomControlsRightPosition }}
      >
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>

      <button
        className={`toggle-button ${state.isSidebarOpen ? "opened" : ""}`}
        onClick={toggleSidebar}
      >
        {state.isSidebarOpen ? ">" : "<"}
      </button>

      <div className={`sidebar ${state.isSidebarOpen ? "open" : ""}`}>
        <div
          className={`${state.selectedTempType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={toggleTemperatureMenu}
        >
          Temperature
        </div>
        {state.showTemperatureMenu && (
          <div className="flex gap-2 ml-1 py-2 px-4">
            <div
              className={`menu-item border border-white ${state.selectedTempOption === "min" ? "bg-blue-500" : ""
                }`}
              onClick={() => handleMenuClick("min")}
            >
              Min
            </div>
            <div
              className={`menu-item border border-white ${state.selectedTempOption === "max" ? "bg-blue-500" : ""
                }`}
              onClick={() => handleMenuClick("max")}
            >
              Max
            </div>
          </div>
        )}

        <div
          className={`${state.selectedDewType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={toggleDewMenu}
        >
          Dew Point Temperature
        </div>
        {state.showDewMenu && (
          <div className="flex gap-2 ml-1 py-2 px-4">
            <div
              className={`menu-item border border-white ${state.selectedDewOption === "min" ? "bg-blue-500" : ""
                }`}
              onClick={() => handleDewMenuClick("min")}
            >
              Min
            </div>
            <div
              className={`menu-item border border-white ${state.selectedDewOption === "max" ? "bg-blue-500" : ""
                }`}
              onClick={() => handleDewMenuClick("max")}
            >
              Max
            </div>
          </div>
        )}

        <div
          className={`${state.selectedMslType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleMslClick}
        >
          Mean Sea Level Pressure
        </div>

        <div
          className={`${state.selectedHumidityType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleHumidityClick}
        >
          Relative Humidity
        </div>

        <div
          className={`${state.selectedWindType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleWindClick}
        >
          Wind Speed & Direction
        </div>

        <div
          className={`${state.selectedCapeType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleCapeClick}
        >
          CAPE
        </div>

        <div
          className={`${state.selectedDustStormType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleDustStormClick}
        >
          Dust Storm
        </div>

        <div
          className={`${state.selectedPrecipitationType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handlePrecipitationClick}
        >
          Total Precipitation
        </div>

        <div
          className={`${state.selectedWindGustType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleWindGustClick}
        >
          Wind Gust Speed
        </div>

        <div
          className={`${state.selectedMultiHazardType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleMultiHazardClick}
        >
          Multi Hazard
        </div>

        <div
          className={`${state.selectedHailProbabilityType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleHailProbabilityClick}
        >
          Hail Probability Index
        </div>

        <div
          className={`${state.selectedKIndexType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleKIndexClick}
        >
          K Index
        </div>

        <div
          className={`${state.selectedCycloneType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleCycloneClick}
        >
          Cyclone
        </div>
        <div
          className={`${state.selectedPrecipitationMmeType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handlePrecipitationMmeClick}
        >
          Percipitation MME
        </div>

        <div
          className={`${state.selectedExtendedPrecipitationType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleExtendedPrecipitationForecast}
        >
          Extended Precipitation Forecast
        </div>

        <div
          className={`${state.selectedSevereWeatherType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleSevereWeatherClick}
        >
          Severe Weather Index
        </div>

        <div
          className={`${state.selectedInflowForecastType ? "bg-blue-500" : ""
            } menu-heading px-3  ml-1 py-2 rounded-md cursor-pointer`}
          onClick={handleInflowForecastClick}
        >
          Inflow Forecast
        </div>
      </div>

      {state.showContinents && (
        <div className="continent-buttons">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => handleContinentClick(continent)}
              className={`px-4 py-2 m-2 rounded-md  text-white ${continent == state.selectedContinent
                ? "bg-blue-500"
                : "bg-gray-800/50"
                }`}
            >
              {continent}
            </button>
          ))}
        </div>
      )}

      {state.showPrecipitationMmeButtons && (
        <div
          className="absolute
      flex  justify-center items-center bottom-16 left-0 right-0 z-10"
        >
          {precipitationMmeMonthlyButtons}
        </div>
      )}
      {state.showDayBar && <div className="day-bar">{dayButtons}</div>}
      {state.showCycloneButtons && (
        <div className="day-bar flex gap-4">{cycloneButtons}</div>
      )}
      {state.showRiverButtons && (
        <div className="day-bar flex gap-4">{riverButtons}</div>
      )}
      {state.showExtendedPrecipitationButtons && (
        <div className="day-bar">{extendedPrecipitationButtons}</div>
      )}
    </div>
  );
};

export default Dashboard;
