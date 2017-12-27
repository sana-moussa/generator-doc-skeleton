'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');



module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('skip-welcome-message', {
            desc: 'Skips the welcome message',
            type: Boolean
        });
    }

    prompting() {
        if (!this.options['skip-welcome-message']) {
            this.log(yosay(`Let\'s create awesome structured  ${chalk.blue('readme')} &  ${chalk.blue('wiki')} for your project!`));
        }

        const prompts = [{
            type: 'input',
            name: 'name',
            message: 'Project name',
            default: this.options.appname || this.appname, //default to current folder name
            when: !this.options.appname,
            store: true
        }, {
            type: 'input',
            name: 'description',
            message: `Briefly describe the project`,
            default: ''
        }, {
            type: 'confirm',
            name: 'requirements',
            message: `Would you like to add a ${chalk.blue('requirements')} section ?`
        },
        //     {
        //     type: 'checkbox',
        //     name: 'requirementsList',
        //     message: 'What are the requirements for this project',
        //     when: answers => answers.requirements,
        //     choices: [{
        //         name: 'node',
        //         value: 'includeNode',
        //     }, {
        //         name: 'npm',
        //         value: 'includeNpm',
        //     }, {
        //         name: 'react',
        //         value: 'includeReact',
        //     }, {
        //         name: 'meteor',
        //         value: 'includeMeteor',
        //     }],
        //
        // },
            {
            type: 'confirm',
            name: 'installation',
            message: `Would you like to add an ${chalk.blue('installation')} section ?`,
        }, {
            type: 'confirm',
            name: 'internal',
            message: `Would you like to create a  ${chalk.magenta('wiki')}`
        }, {
            type: 'confirm',
            name: 'translations',
            message: `Does this project handle ${chalk.blue('translations')}?`,
            when: answers => answers.internal,
        }, {
            type: 'confirm',
            name: 'mobile',
            message: `Does this project contain a ${chalk.blue('mobile app')} ?`,
            when: answers => answers.internal,
        }, {
            type: 'confirm',
            name: 'utils',
            message: `Would you like to add  a ${chalk.blue('utils')} section ?`
        }, {
            type: 'confirm',
            name: 'tests',
            message: `Would you like to add  a ${chalk.blue('tests')} section ?`
        }, {
            type: 'confirm',
            name: 'deployment',
            message: `Would you like to add  a ${chalk.blue('deployment')} section ?`
        }, {
            type: 'confirm',
            name: 'acknowledgments',
            message: `Would you like to add  an ${chalk.blue('acknowledgments')} section ?`
        }, {
            type: 'confirm',
            name: 'dependencies',
            message: `Would you also like to install your dependencies ?`
        }];

        return this.prompt(prompts).then(answers => {
            this.name               = answers.name;
            this.description        = answers.description;
            this.requirements       = answers.requirements;
            this.installation       = answers.installation;
            this.internal           = answers.internal;
            this.translations       = answers.translations;
            this.mobile             = answers.mobile;
            this.utils              = answers.utils;
            this.tests              = answers.tests;
            this.deployment         = answers.deployment;
            this.acknowledgments    = answers.acknowledgments;
            this.dependencies       = answers.dependencies;

            // const requirementsList = answers.requirementsList;
            // const hasRequirement = requirement => requirementsList && requirementsList.indexOf(requirement) !== -1;
            //
            // this.includeReact = hasRequirement('includeReact');
            // this.log(this.includeReact);
        });
    }

    writing() {
        this._writingReadmeFile();
        this._writingWikiFile();

    }

    _writingReadmeFile() {
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('readme.md'),
            {
                name:               this.name,
                description:        this.description,
                requirements:       this.requirements,
                installation:       this.installation,
                utils:              this.utils,
                tests:              this.tests,
                deployment:         this.deployment,
                acknowledgments:    this.acknowledgments,
            }
        );
    }

    _writingWikiFile() {
        this.fs.copyTpl(
            this.templatePath('_WIKI.md'),
            this.destinationPath('wiki.md'),
            {
                name:               this.name,
                internal:           this.internal,
                translations:       this.translations,
                mobile:             this.mobile,
            }
        );
    }

    install() {
        const installDependencies = this.dependencies;
        if (installDependencies) {
            this.installDependencies({
                npm: true,
                bower: false
            });
        }
    }

    end() {
        this.log(chalk.green('Well Done :-} Now please fill in your documentation files with more details.'));
    }

};