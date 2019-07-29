function csrfToken(document) {
    return document.querySelector('[name="csrf-token"]').content;
  }
  
export function passCsrfToken(document, axios) {
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken(document);
}

export function calculateCarbon(type, hours) {
  switch (type) {
    case "car":
      console.log("calculating for car", hours)
      // one hour of driving is ??? per hour
      return hours * 1
    case "plane":
      console.log("calculate for plane", hours)
      // one hour of flight is 150kg of CO2 per hour
      return hours * 150
  }
}