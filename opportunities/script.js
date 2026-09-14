const opportunities = [
  { id: "mit-prime", title: "MIT Beaver Works Summer Institute", type: "camp", topic: "Engineering and computer science", location: "Cambridge, MA", lat: 42.3601, lng: -71.0942, age: "Grades 9-12", description: "A hands-on summer program where students build technical projects with guidance from MIT and industry mentors.", url: "https://bwsi.mit.edu/" },
  { id: "sams", title: "CMU Summer Academy for Mathematics and Science (SAMS)", type: "camp", topic: "Mathematics, science, and engineering", location: "Pittsburgh, PA", lat: 40.4432, lng: -79.9428, age: "Grades 9-12", statusNote: "Financial aid may be available", description: "A rigorous pre-college program introducing students to college-level STEM through coursework, projects, and community.", url: "https://www.cmu.edu/pre-college/academic-programs/sams.html" },
  { id: "clark-scholars", title: "Clark Scholars", type: "camp", topic: "Research", location: "Lubbock, TX", lat: 33.5843, lng: -101.8783, age: "High school students", statusNote: "Applications typically open January 2", description: "A focused research experience for high school students hosted by Texas Tech University faculty.", url: "https://www.depts.ttu.edu/clarkscholars/index.php" },
  { id: "mites", title: "MITES Summer", type: "camp", topic: "STEM and college preparation", location: "Cambridge, MA", lat: 42.3601, lng: -71.0942, age: "Rising high school seniors", description: "A six-week, cost-free STEM experience that immerses students in academic study and life at MIT.", url: "https://mites.mit.edu/discover-mites/mites-summer/" },
  { id: "esteem", title: "ESTEEM / SER-Quest", type: "camp", topic: "Engineering and materials science", location: "College Park, MD", lat: 38.9897, lng: -76.9378, age: "Middle and high school students", statusNote: "Check the program page for 2026 dates", description: "University of Maryland pre-college experiences designed to help students explore engineering and materials science.", url: "https://eng.umd.edu/cmse/pre-college-programs/esteem-ser-quest#programdescription" },
  { id: "summit-stem", title: "Summit Admissions Consulting STEM Programs", type: "activity", topic: "STEM enrichment", location: "Online", lat: 39.5, lng: -98.35, age: "Students", description: "A STEM program directory and consulting resource for students exploring summer learning opportunities.", url: "http://www.summitadmissionsconsulting.com/stem.html" },
  { id: "esp-wisconsin", title: "Engineering Summer Program at Wisconsin", type: "camp", topic: "Engineering", location: "Madison, WI", lat: 43.0731, lng: -89.4012, age: "Middle and high school students", statusNote: "Applications typically open January", description: "Explore engineering through hands-on activities and university-led summer programming at UW-Madison.", url: "https://engineering.wisc.edu/engineering-summer-program/" },
  { id: "world-science-scholars", title: "World Science Scholars", type: "activity", topic: "Advanced mathematics and science", location: "Online and international", lat: 40.7128, lng: -74.006, age: "High school students", statusNote: "Applications typically due in April; year-long program", description: "A global community and enrichment program for students with exceptional interest in advanced mathematics and science.", url: "https://worldsciencescholars.com/application-details/" },
  { id: "duke-summer-stem", title: "Duke Summer STEM", type: "camp", topic: "STEM exploration", location: "Durham, NC", lat: 36.0014, lng: -78.9382, age: "High school students", statusNote: "Applications typically open January", description: "Hands-on summer STEM learning and exploration connected to Duke University.", url: "https://sites.duke.edu/summerstem/admissions/" },
  { id: "summet", title: "SUMMET: Summer Mines Engineering and Training", type: "camp", topic: "Engineering", location: "Golden, CO", lat: 39.7555, lng: -105.2211, age: "High school students", description: "Experience engineering, design, and campus life through Colorado School of Mines summer programming.", url: "https://www.mines.edu/undergraduate-admissions/summer-mines-engineering-and-training-summet/" },
  { id: "sally-ride", title: "Sally Ride Science Academy", type: "camp", topic: "Science and engineering", location: "San Diego, CA", lat: 32.8801, lng: -117.234, age: "Grades 3-12", description: "Interactive science, technology, engineering, and mathematics experiences for students through UC San Diego Extended Studies.", url: "https://extendedstudies.ucsd.edu/educational-programs/sally-ride-science-academy" },
  { id: "wie-rise", title: "WIE RISE", type: "camp", topic: "Women in engineering", location: "College Park, MD", lat: 38.9897, lng: -76.9378, age: "Grades 6-12", description: "University of Maryland Women in Engineering programs that help students explore engineering pathways.", url: "https://eng.umd.edu/wie/future-students/6-12-programs/rise" },
  { id: "oklahoma-robotics", title: "Automation and Robotics Discovery", type: "camp", topic: "Robotics and automation", location: "Stillwater, OK", lat: 36.1156, lng: -97.0584, age: "Students", description: "Explore automation, robotics, and engineering through Oklahoma State University summer camps.", url: "https://ceat.okstate.edu/stem/summer-camps/automation-and-robotics-discovery.html" },
  { id: "aggiestem", title: "AggieSTEM", type: "camp", topic: "STEM exploration", location: "College Station, TX", lat: 30.6187, lng: -96.3365, age: "K-12 students", description: "Texas A&M STEM camps and outreach programs designed to make science and engineering approachable.", url: "https://aggiestem.tamu.edu/" },
  { id: "ualr-nanotech", title: "UALR Nanotechnology Programs", type: "activity", topic: "Nanotechnology and research", location: "Little Rock, AR", lat: 34.7465, lng: -92.2896, age: "Students", description: "Explore nanotechnology education and research opportunities at the University of Arkansas at Little Rock.", url: "https://ualr.edu/nanotechnology/programs/" },
  { id: "dsap-uiuc", title: "Discovering STEM-ACES Program (DSAP)", type: "camp", topic: "STEM and agricultural sciences", location: "Urbana, IL", lat: 40.102, lng: -88.2272, age: "High school students", statusNote: "2026 availability should be confirmed", description: "A University of Illinois pre-college experience exploring science, technology, agriculture, and related fields.", url: "https://www.dcross1dev.web.illinois.edu/academics/pre-college-programs/discovering-stem-aces-program-dsap" },
  { id: "uchicago-smart", title: "UChicago SMART", type: "camp", topic: "Physics and research", location: "Chicago, IL", lat: 41.7917, lng: -87.5997, age: "High school students", statusNote: "Confirm the current application cycle", description: "A University of Chicago summer research experience focused on physics and scientific exploration.", url: "https://ultracold.uchicago.edu/SMART2024" },
  { id: "girls-with-impact", title: "Girls With Impact Innovation Academy", type: "activity", topic: "Entrepreneurship and innovation", location: "Online", lat: 40.7128, lng: -74.006, age: "Ages 14-24", description: "An entrepreneurship program designed with Harvard experts to build business knowledge, confidence, and leadership skills.", url: "https://girlswithimpact.org/" },
  { id: "dartmouth-sead", title: "Summer Enrichment at Dartmouth (SEAD)", type: "camp", topic: "Academic enrichment and leadership", location: "Hanover, NH", lat: 43.7044, lng: -72.2887, age: "High school students", description: "A Dartmouth program supporting promising students from under-resourced backgrounds through academic enrichment and leadership.", url: "https://precollegeonline.dartmouth.edu/" }
];

const grid = document.getElementById("opportunityGrid");
const search = document.getElementById("opportunitySearch");
const count = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
let activeFilter = "all";
const map = L.map("opportunityMap", { scrollWheelZoom: false }).setView([39.5, -96.5], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
const markers = new Map();

opportunities.forEach((opportunity) => {
  const marker = L.marker([opportunity.lat, opportunity.lng]).addTo(map);
  marker.bindPopup(`<strong>${opportunity.title}</strong><br>${opportunity.location}<br><a href="?id=${opportunity.id}#opportunityDetail">View details</a>`);
  marker.on("click", () => showDetail(opportunity.id));
  markers.set(opportunity.id, marker);
});

function visibleOpportunities() {
  const query = search.value.trim().toLowerCase();
  return opportunities.filter((opportunity) => {
    const matchesFilter = activeFilter === "all" || opportunity.type === activeFilter;
    const matchesSearch = !query || `${opportunity.title} ${opportunity.topic} ${opportunity.location}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
}

function renderCards() {
  const visible = visibleOpportunities();
  count.textContent = visible.length;
  emptyState.hidden = visible.length > 0;
  grid.innerHTML = visible.map((opportunity) => `<article class="opportunity-card" data-id="${opportunity.id}"><div class="opportunity-card-top"><span class="opportunity-type">${opportunity.type === "camp" ? "Summer camp" : "Activity"}</span><span class="opportunity-age">${opportunity.age}</span></div><h3>${opportunity.title}</h3><p class="opportunity-topic">${opportunity.topic}</p><p>${opportunity.description}</p>${opportunity.statusNote ? `<p class="opportunity-status">${opportunity.statusNote}</p>` : ""}<div class="opportunity-location">&#9906; ${opportunity.location}</div><a class="button button-ghost" href="?id=${opportunity.id}#opportunityDetail">Learn more <span aria-hidden="true">→</span></a></article>`).join("");
  grid.querySelectorAll(".opportunity-card").forEach((card) => card.addEventListener("mouseenter", () => markers.get(card.dataset.id)?.openPopup()));
}

function showDetail(id) {
  const opportunity = opportunities.find((item) => item.id === id);
  if (!opportunity) return;
  document.getElementById("detailContent").innerHTML = `<p class="section-label">${opportunity.type === "camp" ? "Summer camp" : "Student activity"}</p><h2>${opportunity.title}</h2><p>${opportunity.description}</p><p class="detail-meta">${opportunity.location} · ${opportunity.age} · ${opportunity.topic}</p>${opportunity.statusNote ? `<p class="detail-status">Application note: ${opportunity.statusNote}</p>` : ""}<a class="button button-primary" href="${opportunity.url}" target="_blank" rel="noopener noreferrer">Visit official program <span aria-hidden="true">↗</span></a>`;
  const drawer = document.getElementById("opportunityDetail");
  drawer.hidden = false;
  drawer.scrollIntoView({ behavior: "smooth", block: "center" });
  map.setView([opportunity.lat, opportunity.lng], 8);
  markers.get(id)?.openPopup();
}

document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter-button.is-active").classList.remove("is-active");
  button.classList.add("is-active");
  activeFilter = button.dataset.filter;
  renderCards();
}));
search.addEventListener("input", renderCards);
document.getElementById("resetMap").addEventListener("click", () => map.setView([39.5, -96.5], 4));
document.getElementById("closeDetail").addEventListener("click", () => { document.getElementById("opportunityDetail").hidden = true; history.replaceState(null, "", "./"); });
renderCards();

const requestedId = new URLSearchParams(window.location.search).get("id");
if (requestedId) showDetail(requestedId);