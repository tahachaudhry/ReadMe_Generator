function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-yellow)
  
## Description
  ${data.description} 
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
  
## Installation
  ${data.installation}
  
## Usage
  ${data.usage} 
  
## Contributing
  ${data.contributing} 
  
## Testing
  ${data.testing}  
## License
  ${data.license}
  
  
## Questions
  If you have any questions, please feel free to contact me on github or via email.
  Github:${data.github}
  Email:${data.email}
`;
}

module.exports = generateMarkdown;