const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path')

class Page {
    constructor() {
        this.templateFile = 'template.hbs';
        this.templateContent = fs.readFileSync(path.resolve(__dirname, this.templateFile), 'utf8');
        this.template = handlebars.compile(this.templateContent);
    }

    render(data){       
        if (!this.templateContent){
            console.error("Cannot render template, no content was loaded")
            return;
        }

        return this.template(data);
    }
}
module.exports = Page;