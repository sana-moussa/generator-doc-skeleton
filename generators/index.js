var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    prompting() {

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Project name',
                default: this.options.appname || this.appname, //default to current folder name
                when: !this.options.appname,
                store: true
            }, {
                type: 'input',
                name: 'description',
                message: 'Briefly describe the project',
                default: ''
            }, {
                type: 'confirm',
                name: 'intro',
                message: 'Would you like to add a Getting Started section ?'
            },{
                type: 'confirm',
                name: 'internal',
                message: 'Would you like to add an Internal section ?'
            },{
                type: 'confirm',
                name: 'translations',
                message: 'Does this project handle Translations?'
            },{
                type: 'confirm',
                name: 'mobile',
                message: 'Does this project contain a Mobile app ?'
            }, {
                type: 'confirm',
                name: 'utils',
                message: 'Would you like to add  a Utils section ?'
            }, {
                type: 'confirm',
                name: 'tests',
                message: 'Would you like to add  a Testing section ?'
            }, {
                type: 'confirm',
                name: 'deployment',
                message: 'Would you like to add a Deployment section ?'
            }, {
                type: 'confirm',
                name: 'acknowledgments',
                message: 'Would you like to add an Acknowledgments section ?'
            }];

        return this.prompt(prompts).then((answers) => {
            this.fs.copyTpl(
                this.templatePath('_README.md'),
                this.destinationPath('README.md'),
                answers
            );
        });
    }
};