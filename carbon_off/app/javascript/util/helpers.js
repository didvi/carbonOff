function csrfToken(document) {
    return document.querySelector('[name="csrf-token"]').content;
  }
  
export function passCsrfToken(document, axios) {
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken(document);
}

export function calculateCarbon(type, hours) {
  switch (type) {
    case "car":
      // one hour of driving is .125kg per hour
      return hours * 0.125
    case "plane":
      // one hour of flight is 150kg of CO2 per hour
      return hours * 150
  }
}

export function calculateCarbonCost(carbon) {
  return carbon / 1000 * 32.40;
}

