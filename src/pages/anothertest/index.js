const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

class Page {
    constructor() {
        this.templateFile = 'template.hbs';
        this.templateContent = fs.readFileSync(path.resolve(__dirname, this.templateFile), 'utf8');
        this.template = handlebars.compile(this.templateContent);
    }

    async render(data){       
        if (!this.templateContent){
            console.error("Cannot render template, no content was loaded")
            return;
        }

        return this.template(data);
    }
}
module.exports = Page;