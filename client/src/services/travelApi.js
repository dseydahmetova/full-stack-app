export async function getAllPlaces() {
  const key = 'Wkbi1lT4S7DeLlieN07oVPk4c3n8rycPXNhpbb3W'
  

  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?&api_key=${key}`
    // Another option to use attractions from TicketMaster with next link
    // `https://app.ticketmaster.com/discovery/v2/attractions.json?size=30&countryCode=US&apikey=${key}`
  );
  const data = response.json();
  return data;
}