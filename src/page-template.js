const generateAbout = aboutText => {
    if (!aboutText) {
        return '';
    }    
    return `
        <section class="my-3" id="about">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <p>${aboutText}</p>
        </section>    
    `;
}

const generateProjects = projectsArr => {
      return`
        <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 discplay-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
            .filter(({ feature }) => feature)
            .map(({ name, description, languages, link}) => {
                return`
                <div class="col-12 mb-2 bg-dark text-light p-3">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <h5 class="portfolio-item-languages">
                        Built With:
                        ${languages.join(',')}
                </h5>
                <p>${description}</p>
                <a href="${link}" class="btn"><i class"fab fa-github mr-2"></i>View Project on Github</a>
                 </div>
                 `;   
            })
        }    
            
        .join('')}
;
